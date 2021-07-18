import Mongo from '../db/mongo.js'

/**
 * @type {Mongoose Schema}
 */
const NoteSchema = new Mongo.Schema({
  content: { type: String, default: null, index: true },
  position: {
    x: { type: Number, default: 0 },
    y: { type: Number, default: 0 },
  }
}, { timestamps: true })

/**
 * @type {Mongoose Model}
 */
export default Mongo.model('Note', NoteSchema)
