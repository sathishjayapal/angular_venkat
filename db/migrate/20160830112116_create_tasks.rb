class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :taskName
      t.string :taskDescr

      t.timestamps null: false
    end
  end
end
