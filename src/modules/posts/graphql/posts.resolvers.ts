import { container } from "tsyringe"
import { CreatePostService } from "../services/CreatePostService"
import { GetPostByUserService } from "../services/GetPostsByUserService"

const postsResolvers = {
    Query: {
        getPostByUser(_, { idUser }) {
            const getPostByUserService = container.resolve(GetPostByUserService)
            const posts = getPostByUserService.execute(idUser)
            return posts
        }
    },
    Mutation: {
        createPost(_, { input }) {
            const createPostService = container.resolve(CreatePostService);
            const post = createPostService.execute(input);
            return post;
        }
    }
}

export default postsResolvers