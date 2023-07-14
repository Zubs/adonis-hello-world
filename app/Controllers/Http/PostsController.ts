import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
  public async index({}: HttpContextContract) {
    return 'Get all posts'
  }

  public async store({ response }: HttpContextContract) {
    response.status(201)
    
    return 'Create a new post'
  }

  public async show({ params }: HttpContextContract) {
    return 'Get a post: ' + params.id
  }

  public async update({ params }: HttpContextContract) {
    return 'Update a post: ' + params.id
  }

  public async destroy({ params }: HttpContextContract) {
    return 'Delete a post: ' + params.id
  }
}
