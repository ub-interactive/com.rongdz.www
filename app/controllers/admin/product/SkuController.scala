package controllers.admin.product

import com.github.aselab.activerecord.ActiveRecord.Relation1
import com.mohiva.play.silhouette.api.Silhouette
import controllers.admin.CrudController
import javax.inject.Inject
import models.product.Sku
import models.product.filters.SkuFilter
import models.{ModelFilter, ModelPager, ModelResult, ModelSorter}
import play.api.data.Form
import play.api.i18n.MessagesApi
import play.api.libs.json.{JsValue, Json}
import play.api.mvc._
import play.twirl.api.Html
import services.product.SkuService

import scala.concurrent.Future

class SkuController @Inject()(val messagesApi: MessagesApi, val silhouette: Silhouette[JWTEnv], val has: Has, val crudService: SkuService)
    extends CrudController[Sku] {

  override def indexJson(modelResult: ModelResult[Sku])(implicit requestHeader: RequestHeader): JsValue = {
    import models.product.SkuFilter.format
    Json.toJson(modelResult)
  }

  override def indexHtml(modelResult: ModelResult[Sku])(implicit requestHeader: RequestHeader): Html = {
    val ModelResult(pagedSearchResult, pagination, filter, sorter) = modelResult
    views.html.admin.product.sku.index(pagedSearchResult, pagination, filter.asInstanceOf[SkuFilter], sorter)
  }

  override def indexCall(implicit requestHeader: RequestHeader): Call = {
    routes.SkuController.index()
  }

  override def editHtml(form: Form[Sku])(implicit requestHeader: RequestHeader): Html = {
    form.value match {
      case Some(record) => views.html.admin.product.sku.edit(form, routes.SkuController.update(record.id))
      case None         => views.html.admin.product.sku.edit(form, routes.SkuController.create())
    }
  }

  override def editCall(id: Long)(implicit requestHeader: RequestHeader): Call = {
    routes.SkuController.edit(id)
  }

  override def index(pager: ModelPager, filter: ModelFilter[Sku], sorter: ModelSorter): Action[AnyContent] =
    silhouette.SecuredAction(has.permission(UserToPermission.Admin)).async { implicit request =>
      val modelResult: ModelResult[Sku] = crudService.search(pager, filter, sorter, { relation: Relation1[Sku, Sku] =>
        relation.includes(_.product)
      })
      render.async {
        case Accepts.Json() => Future.successful { Ok(indexJson(modelResult)) }
        case _              => Future.successful { Ok(indexHtml(modelResult)) }
      }
    }
}
