import axiosCustom from "../../../common/api/axios-custom";
import { CursorList } from "../../../common/api/schema/pagination";
import { responseToCamelCase } from "../../../common/utility/case-converter";
import { ArticleDto, ArticleSummaryDto } from "../dto/ArticleDto";
import { Article } from "../model/Article";
import { ArticleCreateRequestVo, ArticleModifyRequestVo, ArticleSummaryVo, ArticleVo} from "./vo/article-vo";

const env = process.env

export async function getArticlesByUrl(url: string): Promise<CursorList<ArticleSummaryDto>> {
    try {
        const response = await axiosCustom.get(url)
        return responseToCamelCase<CursorList<ArticleSummaryVo>, CursorList<ArticleSummaryDto>>(response.data)
    } catch(error) {
        throw error        
    }
}

export async function getCategoryArticles(categoryId: number, createdAt: Date|null): Promise<CursorList<ArticleSummaryDto>>{
    // console.log("[article-api]::getCategoryArticles called. category ID : " + categoryId)
    try {
        const queries = {
            categoryId: categoryId,
            createdAt: createdAt||null
        }

        const response = await axiosCustom.get(env.REACT_APP_API_ARTICLE, {params: queries})
        // console.log("   respone : " + JSON.stringify(response))
        return responseToCamelCase<CursorList<ArticleSummaryVo>, CursorList<ArticleSummaryDto>>(response.data)
    }catch(error) {
        throw error
    }
}

export async function getArticle(id: string): Promise<ArticleDto> {
    try {
        const url = env.REACT_APP_API_ARTICLE_DETAIL+id 
        const response = await axiosCustom.get(url)
        const data = response.data

        return responseToCamelCase<ArticleVo, ArticleDto>(data)
    }catch(error){
        throw error
    }
}

export async function createArticle(title: string, contents: string, category: string): Promise<ArticleDto> {
    try{
        const vo: ArticleCreateRequestVo = {
            title: title,
            contents: contents,
            category: category
        }
        const response = await axiosCustom.post(env.REACT_APP_API_ARTICLE, vo)
        return responseToCamelCase<ArticleVo, ArticleDto>(response.data)
       }catch(error){
        throw error
    }
}

export async function modifyArticle(article: Article): Promise<ArticleDto> {
    try {
        const vo: ArticleModifyRequestVo = {
            title: article.title,
            contents: article.contents,
            category: article.category.name
        }
        const url = env.REACT_APP_API_ARTICLE_DETAIL + article.id
        const response = await axiosCustom.patch(url, vo)
        return responseToCamelCase<ArticleVo, ArticleDto>(response.data)
    }catch(error) {
        throw error
    }
}

export async function deleteArticle(id: string) {
    try {
        const url = env.REACT_APP_API_ARTICLE_DETAIL + id
        return await axiosCustom.delete(url)
    }catch(error) {
        throw error
    }
}