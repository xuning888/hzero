package org.hzero.boot.platform.data.hierarchy;

import io.choerodon.core.oauth.CustomUserDetails;
import org.springframework.core.PriorityOrdered;

/**
 * 用户附加信息变更回调
 *
 * @author 废柴 2020/9/10 11:09
 */
public interface AdditionInfoValueHandler extends PriorityOrdered {

    @Override
    default int getOrder() {
        return 0;
    }

    /**
     * 在数据层级配置的值更新时做一些事情
     *
     * @param userDetails          当前用户信息
     * @param dataHierarchyCode    数据层级配置编码
     * @param dataHierarchyValue   数据层级配置值
     * @param dataHierarchyMeaning 数据层级配置含义
     * @return 新的数据层级配置值
     */
    default String valueHandler(CustomUserDetails userDetails,
                                String dataHierarchyCode,
                                String dataHierarchyValue,
                                String dataHierarchyMeaning) {
        return dataHierarchyValue;
    }

    /**
     * 在数据层级配置的值更新时做一些事情
     *
     * @param userDetails          当前用户信息
     * @param dataHierarchyCode    数据层级配置编码
     * @param dataHierarchyValue   数据层级配置值
     * @param dataHierarchyMeaning 数据层级配置含义
     * @return 新的数据层级配置显示值
     */
    default String meaningHandler(CustomUserDetails userDetails,
                                  String dataHierarchyCode,
                                  String dataHierarchyValue,
                                  String dataHierarchyMeaning) {
        return dataHierarchyMeaning;
    }

}
