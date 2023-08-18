const Procedure = require('../models/Procedure')

exports.create = (procedureData) => Procedure.create(procedureData)

exports.getAll = async (qs) => {
    let query = Procedure.find()

    //if no where will take all
    if (qs.where) {
        let [fieldName, ownerId] = qs.where.split('=')
        ownerId = ownerId.replaceAll('"', '')
        query = query.where('_ownerId').eq(ownerId)
    }
    const result = await query
    return result
}

exports.getOne = (procedureId) => Procedure.findById(procedureId)

exports.update = (furnitureId, data) => Furniture.findByIdAndUpdate(furnitureId, data)

exports.delete = (furnitureId) => Furniture.findByIdAndDelete(furnitureId)


