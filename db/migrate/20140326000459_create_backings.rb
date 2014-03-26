class CreateBackings < ActiveRecord::Migration
  def change
    create_table :backings do |t|
      t.integer :investment, :null => false
      t.integer :backer_id, :null => false
      t.integer :backed_project_id, :null => false
      
      t.timestamps
    end
    
    add_index :backings, [:backer_id, :backed_project_id]
  end
end
