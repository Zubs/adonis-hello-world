import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'

export default class PostsController {
  public async index({}: HttpContextContract) {
    return {
      data: await Post.all(),
    }
  }

  public async store({ request, response }: HttpContextContract) {
    response.status(201)

    return Post.create(request.only(['title', 'content']))
  }

  public async show({ params, response }: HttpContextContract) {
    const post = await Post.find(params.id)

    if (post) {
      return { ...post.toJSON() }
    } else {
      response.status(404)

      return { error: 'Post not found' }
    }
  }

  public async update({ params, request, response }: HttpContextContract) {
    const post = await Post.find(params.id)

    if (post) {
      const { title, content } = request.only(['title', 'content'])
      post.title = title
      post.content = content

      return post.save()
    } else {
      response.status(404)

      return { error: 'Post not found' }
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    const post = await Post.find(params.id)

    if (post) {
      await post.delete()

      return { message: 'Post deleted' }
    } else {
      response.status(404)

      return { error: 'Post not found' }
    }
  }
}
