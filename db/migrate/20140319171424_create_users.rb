class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :email, null: false, unique: true
      t.text :name, null: false
      t.text :password_digest, null: false
      t.text :session_token
      
      t.timestamps
    end
  end
end
