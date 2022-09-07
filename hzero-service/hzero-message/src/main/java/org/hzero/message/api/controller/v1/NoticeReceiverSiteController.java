package org.hzero.message.api.controller.v1;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.hzero.boot.platform.lov.annotation.ProcessLovValue;
import org.hzero.core.base.BaseConstants;
import org.hzero.core.base.BaseController;
import org.hzero.core.util.Results;
import org.hzero.message.app.service.NoticeReceiverService;
import org.hzero.message.config.MessageSwaggerApiConfig;
import org.hzero.message.domain.entity.NoticeReceiver;
import org.hzero.message.domain.entity.Unit;
import org.hzero.message.domain.repository.NoticeReceiverRepository;
import org.hzero.mybatis.helper.SecurityTokenHelper;
import org.hzero.starter.keyencrypt.core.Encrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import springfox.documentation.annotations.ApiIgnore;

import java.util.List;

import io.choerodon.core.domain.Page;
import io.choerodon.core.iam.ResourceLevel;
import io.choerodon.core.oauth.DetailsHelper;
import io.choerodon.mybatis.pagehelper.annotation.SortDefault;
import io.choerodon.mybatis.pagehelper.domain.PageRequest;
import io.choerodon.mybatis.pagehelper.domain.Sort;
import io.choerodon.swagger.annotation.Permission;

/**
 * 公告接收记录 管理 API
 *
 * @author minghui.qiu@hand-china.com
 * @date 2019-06-10 16:18:09
 */
@Api(tags = MessageSwaggerApiConfig.NOTICE_RECEIVER_SITE)
@RestController("noticeReceiverSiteController.v1")
@RequestMapping("/v1/notices/receivers")
public class NoticeReceiverSiteController extends BaseController {

    @Autowired
    private NoticeReceiverService noticeReceiveRecordService;
    @Autowired
    private NoticeReceiverRepository noticeReceiveRecordRepository;

    @ApiOperation(value = "公告接收记录列表")
    @Permission(level = ResourceLevel.SITE)
    @ProcessLovValue(targetField = BaseConstants.FIELD_BODY)
    @GetMapping("/{noticeId}")
    public ResponseEntity<Page<NoticeReceiver>> list(@Encrypt @RequestParam(required = false) @ApiParam("发布记录ID列表") List<Long> publishedIds,
                                                     @Encrypt @PathVariable Long noticeId, @ApiIgnore @SortDefault(value = NoticeReceiver.FIELD_RECEIVE_TYPE, direction = Sort.Direction.DESC) PageRequest pageRequest) {
        return Results.success(noticeReceiveRecordService.listReceiveRecordPage(null, pageRequest, publishedIds, noticeId));
    }

    @ApiOperation(value = "创建公告接收记录")
    @Permission(level = ResourceLevel.SITE)
    @PostMapping("/{noticeId}")
    public ResponseEntity<List<NoticeReceiver>> create(@Encrypt @PathVariable Long noticeId, @Encrypt @RequestBody List<NoticeReceiver> noticeReceiveList) {
        return Results.success(noticeReceiveRecordService.createNoticeReceiver(noticeId, DetailsHelper.getUserDetails().getTenantId(), noticeReceiveList));
    }

    @ApiOperation(value = "修改公告接收记录")
    @Permission(level = ResourceLevel.SITE)
    @PutMapping
    public ResponseEntity<NoticeReceiver> update(@Encrypt @RequestBody NoticeReceiver noticeReceiveRecord) {
        noticeReceiveRecordRepository.updateByPrimaryKeySelective(noticeReceiveRecord);
        return Results.success(noticeReceiveRecord);
    }

    @ApiOperation(value = "删除公告接收记录")
    @Permission(level = ResourceLevel.SITE)
    @DeleteMapping
    public ResponseEntity<Void> remove(@Encrypt @RequestBody NoticeReceiver noticeReceive) {
        SecurityTokenHelper.validTokenIgnoreInsert(noticeReceive);
        noticeReceiveRecordRepository.delete(noticeReceive);
        return Results.success();
    }

    /**
     * 组织列表,用于配置接收方
     */
    @ApiOperation(value = "接收方组织列表")
    @Permission(level = ResourceLevel.SITE)
    @GetMapping("/units")
    public ResponseEntity<Page<Unit>> listUnits(@RequestParam(required = false) @ApiParam(value = "组织名称") String unitName,
                                                @RequestParam(required = false) @ApiParam(value = "组织编码") String unitCode,
                                                @ApiIgnore @SortDefault(value = Unit.FIELD_UNIT_ID, direction = Sort.Direction.DESC) PageRequest pageRequest) {
        return Results.success(noticeReceiveRecordRepository.listAllUnits(pageRequest, null, unitName, unitCode));
    }

}
