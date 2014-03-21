class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.text :title, :null => :false
      t.text :short_blurb, :null => false
      t.text :project_location, :null => false
      t.integer :funding_duration, :null => false
      t.integer :funding_goal, :null => false
      t.integer :creator_id, :null => false

      t.timestamps
    end
    
    add_index :projects, :creator_id
  end
end
