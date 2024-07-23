import { Col, Row } from "react-bootstrap"
import "./css/article.css"
import { ArticleListPanel } from "./components/ArticleListPanel"
import useArticleViewModel from "../../viewmodel/ArticleViewModel"
import CategoryListPanel from "./components/CategoryListPanel"


const ArticleView : React.FC = () => {
  const vm = useArticleViewModel()

  return (
    <div style = {{marginTop: '90px'}}>
    <Row>
        <Col sm={0} xs={0} md={0} lg={4} xl={3}>
          <CategoryListPanel/>
        </Col>
        <Col sm={0} xs={12} md={12}  lg={8} xl={9}>
          <ArticleListPanel 
            articles = {vm.articles} 
            category={vm.category} 
            onClickItem={vm.onClickArticleListItem}
            onClickAddItem={vm.onClickAddArticleButton}
            intersectArea = {vm.intersectArea}
            isLoading = {vm.isLoading}
            isEnd = {vm.isEnd}
          />
        </Col>
    </Row>
</div>
  )
}


export default ArticleView
