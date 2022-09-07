package org.hzero.boot.platform.lov.handler;

import java.util.List;
import java.util.Map;

/**
 * SQL值集处理器
 *
 * @author gaokuo.dai@hand-china.com 2018年6月26日下午6:50:30
 */
public interface LovPubSqlHandler {

    /**
     * 查询数据
     *
     * @param lovCode    值集代码
     * @param tenantId   租户ID(可空)
     * @param queryParam 查询参数(键值对)
     * @param page       分页页码
     * @param size       分页大小
     * @return 查询到的数据
     */
    List<Map<String, Object>> queryPubData(String lovCode, String lang, Long tenantId, Map<String, Object> queryParam, int page, int size);

    /**
     * 查询翻译sql数据
     *
     * @param lovCode  值集代码
     * @param tenantId 租户ID
     * @param params   查询参数
     * @return 查询到的数据
     */
    List<Map<String, Object>> queryPubTranslationData(String lovCode, String lang, Long tenantId, List<String> params);

    /**
     * 根据值集值查询值集含义
     *
     * @param lovCode     值集代码
     * @param tenantId    租户ID(可空)
     * @param queryParams 查询参数(键值对),其中identity必传,代表值集值
     * @return 查询到的值集含义
     */
    List<Map<String, Object>> getPubLovSqlMeaning(String lovCode, String lang, Long tenantId, Map<String, Object> queryParams);

}
