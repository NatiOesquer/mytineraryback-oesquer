import { model,Schema,Types} from 'mongoose'

let collection = 'activities'

let schema = new Schema({
    name: { type:String, require:true},
    photo: { type:String, require:true},
    itinerary_id: { type:Types.ObjectId,require:true,ref:'name'}
})
let Activity = model(collection, schema)

export default Activity