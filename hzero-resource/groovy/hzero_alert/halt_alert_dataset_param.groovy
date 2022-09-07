package script.db

databaseChangeLog(logicalFilePath: 'script/db/halt_alert_dataset_param.groovy') {
    changeSet(author: "xingxing.wu@hand-china.com", id: "2020-06-09-halt_alert_dataset_param") {
        def weight = 1
        if(helper.isSqlServer()){
            weight = 2
        } else if(helper.isOracle()){
            weight = 3
        }
        if(helper.dbType().isSupportSequence()){
            createSequence(sequenceName: 'halt_alert_dataset_param_s', startValue:"1")
        }
        createTable(tableName: "halt_alert_dataset_param", remarks: "告警数据集参数") {
            column(name: "alert_dataset_param_id", type: "bigint", autoIncrement: true ,   remarks: "表ID，主键")  {constraints(primaryKey: true)} 
            column(name: "alert_dataset_id", type: "bigint",  remarks: "告警来源ID")  {constraints(nullable:"false")}  
            column(name: "alert_source_id", type: "bigint",  remarks: "告警来源ID")  {constraints(nullable:"false")}  
            column(name: "alert_id", type: "bigint",  remarks: "告警ID")  {constraints(nullable:"false")}  
            column(name: "tenant_id", type: "bigint",   defaultValue:"0",   remarks: "租户ID")  {constraints(nullable:"false")}  
            column(name: "param_name", type: "varchar(" + 60 * weight + ")",  remarks: "参数名")   
            column(name: "param_type", type: "varchar(" + 30 * weight + ")",  remarks: "参数类型")  {constraints(nullable:"false")}  
            column(name: "param_value", type: "varchar(" + 150 * weight + ")",  remarks: "参数值")   
            column(name: "object_version_number", type: "bigint",   defaultValue:"1",   remarks: "行版本号，用来处理锁")  {constraints(nullable:"false")}  
            column(name: "creation_date", type: "datetime",   defaultValueComputed:"CURRENT_TIMESTAMP",   remarks: "")  {constraints(nullable:"false")}  
            column(name: "created_by", type: "bigint",   defaultValue:"-1",   remarks: "")  {constraints(nullable:"false")}  
            column(name: "last_updated_by", type: "bigint",   defaultValue:"-1",   remarks: "")  {constraints(nullable:"false")}  
            column(name: "last_update_date", type: "datetime",   defaultValueComputed:"CURRENT_TIMESTAMP",   remarks: "")  {constraints(nullable:"false")}  

        }
   createIndex(tableName: "halt_alert_dataset_param", indexName: "halt_alert_dataset_param_n1") {
            column(name: "alert_dataset_id")
            column(name: "alert_source_id")
            column(name: "alert_id")
            column(name: "tenant_id")
        }

    }
}