package script.db

databaseChangeLog(logicalFilePath: 'script/db/hres_formula_component.groovy') {
    changeSet(author: "hzero@hand-china.com", id: "2020-03-10-hres_formula_component") {
        def weight = 1
        if(helper.isSqlServer()){
            weight = 2
        } else if(helper.isOracle()){
            weight = 3
        }
        if(helper.dbType().isSupportSequence()){
            createSequence(sequenceName: 'hres_formula_component_s', startValue:"1")
        }
        createTable(tableName: "hres_formula_component", remarks: "公式组件") {
            column(name: "FORMULA_COMPONENT_ID", type: "bigint", autoIncrement: true ,   remarks: "表ID，主键，供其他表做外键")  {constraints(primaryKey: true)} 
            column(name: "RULE_CODE", type: "varchar(" + 60 * weight + ")",  remarks: "规则编码，HRES_RULE.RULE_CODE")  {constraints(nullable:"false")}  
            column(name: "FORMULA_NAME", type: "varchar(" + 60 * weight + ")",  remarks: "公式名称")  {constraints(nullable:"false")}  
            column(name: "FORMULA_TYPE", type: "varchar(" + 60 * weight + ")",  remarks: "公式类型")  {constraints(nullable:"false")}  
            column(name: "FORMULA_TEXT", type: "longtext",  remarks: "公式内容")  {constraints(nullable:"false")}  
            column(name: "TENANT_ID", type: "bigint",   defaultValue:"0",   remarks: "租户ID，hpfm_tenant.tenant_id")  {constraints(nullable:"false")}  
            column(name: "OBJECT_VERSION_NUMBER", type: "bigint",   defaultValue:"1",   remarks: "行版本号，用来处理锁")  {constraints(nullable:"false")}  
            column(name: "CREATION_DATE", type: "datetime",   defaultValueComputed:"CURRENT_TIMESTAMP",   remarks: "")  {constraints(nullable:"false")}  
            column(name: "CREATED_BY", type: "bigint",   defaultValue:"-1",   remarks: "")  {constraints(nullable:"false")}  
            column(name: "LAST_UPDATE_DATE", type: "datetime",   defaultValueComputed:"CURRENT_TIMESTAMP",   remarks: "")  {constraints(nullable:"false")}  
            column(name: "LAST_UPDATED_BY", type: "bigint",   defaultValue:"-1",   remarks: "")  {constraints(nullable:"false")}  

        }

        addUniqueConstraint(columnNames:"RULE_CODE,FORMULA_NAME",tableName:"hres_formula_component",constraintName: "HRES_FORMULA_COMPONENT_U1")
    }
}