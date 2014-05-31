require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(:default, Rails.env)

module PunchStarter
  class Application < Rails::Application
    config.assets.initialize_on_precompile = false
    config.filepicker_rails.api_key = ENV["FILEPICKER_API"]
    config.assets.precompile += ['jquery.js']
  end
end