class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :userid
      t.string :FirstName
      t.string :string

      t.timestamps null: false
    end
  end
end
