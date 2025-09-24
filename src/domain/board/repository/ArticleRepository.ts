import axiosCustom from "../../../common/api/axios-custom";
import { CursorList } from "../../../common/api/schema/pagination";
import { convertDtoToModel } from "../../../common/utility/converter";
import { Member } from "../../member/model/Member";
import { createArticle, deleteArticle, getArticle, getArticlesByUrl, getCategoryArticles, modifyArticle } from "../api/article-api";
import { ArticleDto } from "../dto/ArticleDto";
import { Article } from "../model/Article";
import { Category } from "../model/Category";

export class ArticleRepository {

    private mapToModel(dto: ArticleDto): Article {
        try {
            return new Article(
                dto.id,
                dto.title,
                dto.createdAt,
                dto.content,
                new Member(dto.writer.id, dto.writer.nickname),
                new Category(dto.category.id, dto.category.name, dto.category.count),
                dto.viewCount,
                dto.commentCount,
                dto.likeCount,
            )
        } catch(error) {
            throw error
        }
    }

    public async getArticles(category: number, size: number, callback: any): Promise<Article[]>{
        // console.log("[ArticleRepository]::get articles called. cat : " + category)
        try {
            const categoryId = category === 0 ? null : category
            const listData: CursorList<ArticleDto> = await getCategoryArticles(categoryId, null, size)
            // console.log("listData : ", listData)
            const models = listData.items.map((v, i) =>  this.mapToModel(v))
            // console.log("models : ", models)
            callback(listData._links?.next?.href || null)
            return models
        }catch(error){
            throw error
        }
    }

    public async getArticlesByUrl(url: string|null, callback: any): Promise<Article[]> {
        try {
            if(url === null) return []
            const listData: CursorList<ArticleDto> = await getArticlesByUrl(url)
            const models = listData.items.map((v, i) =>  this.mapToModel(v))
            callback(listData._links?.next?.href || null)
            return models
        }catch(error){
            throw error
        }
    }

    public async getArticle(id: string): Promise<Article> {
        try {
            const dto = await getArticle(id)
            return this.mapToModel(dto)
        } catch(error) {
            throw error
        }
    }

    public async save(article: Article): Promise<Article> {
        try {
            const response = await createArticle(article.title, article.contents, article.category.id)
            article.id=response.id
            return article
        } catch(error) {
            throw error
        }
    }

    public async modify(article: Article): Promise<Article> {
        try {
            const response = await modifyArticle(article)
            return article
        } catch(error) {
            throw error
        }
    }

    public async deleteById(id: string) {
        try {
            const response = await deleteArticle(id)
        }catch(error){
            throw error
        }
    }
}

const articleRepository = new ArticleRepository()

export default articleRepository