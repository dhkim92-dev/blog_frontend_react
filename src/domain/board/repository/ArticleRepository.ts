import axiosCustom from "../../../common/api/axios-custom";
import { convertDtoToModel } from "../../../common/utility/converter";
import { createArticle, deleteArticle, getArticle, getArticlesByUrl, getCategoryArticles, modifyArticle } from "../api/article-api";
import { ArticleCreateRequestVo } from "../api/vo/article-vo";
import { ArticleDto, ArticleSummaryDto } from "../dto/ArticleDto";
import { Article } from "../model/Article";

export class ArticleRepository {

    public async getArticles(category: number, callback: any): Promise<Article[]>{
        // console.log("[ArticleRepository]::get articles called. cat : " + category)
        try {
            const listData = await getCategoryArticles(category, null)
            // console.log("receive data : " + JSON.stringify(listData))
            const models = listData.data.map((v, i) => {
                return convertDtoToModel<ArticleSummaryDto, Article>(v, Article)
            })
            // console.log("models : " + JSON.stringify(models))
            callback(listData.next)
            return models
        }catch(error){
            throw error
        }
    }

    public async getArticlesByUrl(url: string|null, callback: any): Promise<Article[]> {
        try {
            if(url === null) return []
            const listData = await getArticlesByUrl(url)
            const models = listData.data.map((v, i) => {
                return convertDtoToModel<ArticleSummaryDto, Article>(v, Article)
            })
            callback(listData.next)
            return models
        }catch(error){
            throw error
        }
    }

    public async getArticle(id: string): Promise<Article> {
        try {
            const dto = await getArticle(id)
            return convertDtoToModel<ArticleDto, Article>(dto, Article)
        } catch(error) {
            throw error
        }
    }

    public async save(article: Article): Promise<Article> {
        try {
            const response = await createArticle(article.title, article.contents, article.category.name)
            return convertDtoToModel<ArticleDto, Article>(response, Article)
        } catch(error) {
            throw error
        }
    }

    public async modify(article: Article): Promise<Article> {
        try {
            const response = await modifyArticle(article)
            return convertDtoToModel<ArticleDto, Article>(response, Article)
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