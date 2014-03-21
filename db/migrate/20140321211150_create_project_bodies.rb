class CreateProjectBodies < ActiveRecord::Migration
  def change
    create_table :project_bodies do |t|
      t.integer :project_id
      t.text :description
      t.text :challenges
      t.text :faq
      
      t.timestamps
    end
    
    add_index :project_bodies, :project_id
  end
end
