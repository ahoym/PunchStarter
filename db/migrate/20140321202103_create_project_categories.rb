class CreateProjectCategories < ActiveRecord::Migration
  def change
    create_table :project_categories do |t|
      t.integer :project_id
      t.integer :category_id
      
      t.timestamps
    end
    
    add_index :project_categories, :project_id
    add_index :project_categories, :category_id    
  end
end
