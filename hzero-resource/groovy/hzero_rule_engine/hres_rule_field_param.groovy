package script.db

databaseChangeLog(logicalFilePath: 'script/db/hres_rule_field_param.groovy') {
    changeSet(author: "hzero@hand-china.com", id: "2020-03-10-hres_rule_field_param") {
        def weight = 1
        if(helper.isSqlServer()){
            weight = 2
        } else if(helper.isOracle()){
            weight = 3
        }
        if(helper.dbType().isSupportSequence()){
            createSequence(sequenceName: 'hres_rule_field_param_s', startValue:"1")
        }
        createTable(tableName: "hres_rule_field_param", remarks: "规则组件字段参数") {
            column(name: "RULE_FIELD_PARAM_ID", type: "bigint", autoIncrement: true ,   remarks: "表ID，主键，供其他表做外键")  {constraints(primaryKey: true)} 
            column(name: "RULE_CODE", type: "varchar(" + 60 * weight + ")",  remarks: "规则编码，HRES_RULE.RULE_CODE")  {constraints(nullable:"false")}  
            column(name: "RULE_COMPONENT_NAME", type: "varchar(" + 60 * weight + ")",  remarks: "规则组件名称")  {constraints(nullable:"false")}  
            column(name: "FIELD_NAME", type: "varchar(" + 60 * weight + ")",  remarks: "字段名称")  {constraints(nullable:"false")}  
            column(name: "PARAM_NAME", type: "varchar(" + 60 * weight + ")",  remarks: "参数名称")  {constraints(nullable:"false")}  
            column(name: "FORMULA", type: "longtext",  remarks: "公式")  {constraints(nullable:"false")}  
            column(name: "TENANT_ID", type: "bigint",   defaultValue:"0",   remarks: "租户ID，hpfm_tenant.tenant_id")  {constraints(nullable:"false")}  
            column(name: "OBJECT_VERSION_NUMBER", type: "bigint",   defaultValue:"1",   remarks: "行版本号，用来处理锁")  {constraints(nullable:"false")}  
            column(name: "CREATION_DATE", type: "datetime",   defaultValueComputed:"CURRENT_TIMESTAMP",   remarks: "")  {constraints(nullable:"false")}  
            column(name: "CREATED_BY", type: "bigint",   defaultValue:"-1",   remarks: "")  {constraints(nullable:"false")}  
            column(name: "LAST_UPDATE_DATE", type: "datetime",   defaultValueComputed:"CURRENT_TIMESTAMP",   remarks: "")  {constraints(nullable:"false")}  
            column(name: "LAST_UPDATED_BY", type: "bigint",   defaultValue:"-1",   remarks: "")  {constraints(nullable:"false")}  

        }

        addUniqueConstraint(columnNames:"RULE_CODE,FIELD_NAME,PARAM_NAME",tableName:"hres_rule_field_param",constraintName: "HRES_RULE_FIELD_PARAM_U1")
    }
}