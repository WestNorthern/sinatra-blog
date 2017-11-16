class CreatePostsTable < ActiveRecord::Migration[5.1]
  def change
  	create_table :posts do |t|
  		t.string :title
  		t.string :content
  		t.references :user

  		t.timestamps
  		
  	end
  end
end