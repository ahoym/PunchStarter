class CreateStars < ActiveRecord::Migration
  def change
    create_table :stars do |t|
      t.integer :liker_id
      t.integer :liked_project_id
      
      t.timestamps
    end
    
    add_index :stars, :liker_id
    add_index :stars, :liked_project_id    
  end
end