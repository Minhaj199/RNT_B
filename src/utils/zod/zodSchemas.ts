import{ z }from 'zod'

export const envSchema=z.object({
    PORT:z.coerce.number('port not found'),
    DB_STRING:z.string('db string not found').min(3,'not valid db string'),
    CORS_ORIGIN:z.url('cors orgin url not found')

})
export const newNodeSchema=z.object({
    name:z.string('name not found').trim().min(3,'name atlease 3 charectors').max(15,'max limit 15 reached'),
    parentId:z.string('not valid parrent id').min(3,'not vaid parent').nullable().optional(),
    level:z.number('not valid level').int('not valid level').nonnegative('non negetive not allowed'),
    children:z.array(z.string('not valid child').min(3,'not valid child')).optional()
})


export type NewNodeSchemaType=z.infer<typeof newNodeSchema>