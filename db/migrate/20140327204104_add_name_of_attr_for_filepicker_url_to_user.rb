class AddNameOfAttrForFilepickerUrlToUser < ActiveRecord::Migration
  def change
    add_column :projects, :filepicker_url, :string
  end
end
