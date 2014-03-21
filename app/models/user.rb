# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :text             not null
#  name            :text             not null
#  password_digest :text             not null
#  session_token   :text
#  created_at      :datetime
#  updated_at      :datetime
#  admin           :boolean          default(FALSE)
#

class User < ActiveRecord::Base
  attr_reader :password
  
  before_validation :ensure_session_token
  validates :name, :email, :password_digest, :session_token, presence: true
  validates :name, :email, uniqueness: true
  validates :session_token, presence: true, uniqueness: true

  has_many(
    :created_projects, :inverse_of => :creator,
    :foreign_key => :creator_id,
    :class_name => "Project"
  )

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end
  
  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return user if user && user.is_password?(password)
    nil
  end
end