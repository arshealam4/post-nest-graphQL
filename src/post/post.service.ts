import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { PostDTO } from './dto/post.dto';
import { IPost } from './interface/post.interface';
import { Post } from './model/post.model';
import { ParamDTO } from './dto/param.dto';

@Injectable()
export class PostService {

    constructor( @Inject('POST_MODEL') private postModel: Model<IPost>){}

    async findAll(params: ParamDTO): Promise<Post[]> {
        const limit = params.limit ? params.limit : 1000;
        const skip = params.pageNo ? ((params.pageNo - 1) * limit) : 0;
        try {
            return this.postModel.find().skip(skip).limit(limit);
        } catch (err) {
            return err;
        }
        
    }

    async findOne(id: String): Promise<Post[]> {
        try {
            return this.postModel.find({_id: id});
        } catch (err) {
            return err;
        }
        
    }

    async create(postData: PostDTO): Promise<Post> {
        const createdPost = new this.postModel(postData);
        return createdPost.save();        
    }

    async edit(id: String, body: PostDTO): Promise<Post> {
        const query = {_id: id};
        return this.postModel.findOneAndUpdate(query, {$set: body}, {new: true}).exec()
    }

    async delete(id: String): Promise<Post> {
        const data = await this.findOne(id);
        if (!data) {
            throw new Error('no item found!')
        }
        return this.postModel.findByIdAndRemove({_id: id})
    }

}
