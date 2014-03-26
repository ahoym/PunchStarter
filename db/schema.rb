# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140326000459) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "backings", force: true do |t|
    t.integer  "investment",        null: false
    t.integer  "backer_id",         null: false
    t.integer  "backed_project_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "backings", ["backed_project_id"], name: "index_backings_on_backed_project_id", using: :btree
  add_index "backings", ["backer_id"], name: "index_backings_on_backer_id", using: :btree

  create_table "categories", force: true do |t|
    t.text     "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "project_bodies", force: true do |t|
    t.integer  "project_id"
    t.text     "description"
    t.text     "challenges"
    t.text     "faq"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "project_bodies", ["project_id"], name: "index_project_bodies_on_project_id", using: :btree

  create_table "project_categories", force: true do |t|
    t.integer  "project_id"
    t.integer  "category_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "project_categories", ["category_id"], name: "index_project_categories_on_category_id", using: :btree
  add_index "project_categories", ["project_id"], name: "index_project_categories_on_project_id", using: :btree

  create_table "projects", force: true do |t|
    t.text     "title"
    t.text     "short_blurb",      null: false
    t.text     "project_location", null: false
    t.integer  "funding_duration", null: false
    t.integer  "funding_goal",     null: false
    t.integer  "creator_id",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "projects", ["creator_id"], name: "index_projects_on_creator_id", using: :btree

  create_table "users", force: true do |t|
    t.text     "email",                           null: false
    t.text     "name",                            null: false
    t.text     "password_digest",                 null: false
    t.text     "session_token"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "admin",           default: false
  end

end
