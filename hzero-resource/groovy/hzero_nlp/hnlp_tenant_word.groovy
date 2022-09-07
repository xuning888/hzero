package script.db

databaseChangeLog(logicalFilePath: 'script/db/hnlp_tenant_word.groovy') {
    changeSet(author: "hzero@hand-china.com", id: "2019-06-21-hnlp_tenant_word") {
        def weight = 1
        if(helper.isSqlServer()){
            weight = 2
        } else if(helper.isOracle()){
            weight = 3
        }
        if(helper.dbType().isSupportSequence()){
            createSequence(sequenceName: 'hnlp_tenant_word_s', startValue:"1")
        }
        createTable(tableName: "hnlp_tenant_word", remarks: "租户词语映射") {
            column(name: "TENANT_WORD_ID", type: "bigint", autoIncrement: true ,   remarks: "主键")  {constraints(primaryKey: true)} 
            column(name: "TENANT_ID", type: "bigint",   defaultValue:"0",   remarks: "租户ID")  {constraints(nullable:"false")}  
            column(name: "ACTUAL_WORD", type: "varchar(" + 300 * weight + ")",  remarks: "实际词语")  {constraints(nullable:"false")}  
            column(name: "WORD", type: "varchar(" + 300 * weight + ")",  remarks: "转换后词语")   
            column(name: "object_version_number", type: "bigint",   defaultValue:"1",   remarks: "行版本号，用来处理锁")  {constraints(nullable:"false")}  
            column(name: "creation_date", type: "datetime",   defaultValueComputed:"CURRENT_TIMESTAMP",   remarks: "")  {constraints(nullable:"false")}  
            column(name: "created_by", type: "bigint",   defaultValue:"-1",   remarks: "")  {constraints(nullable:"false")}  
            column(name: "last_updated_by", type: "bigint",   defaultValue:"-1",   remarks: "")  {constraints(nullable:"false")}  
            column(name: "last_update_date", type: "datetime",   defaultValueComputed:"CURRENT_TIMESTAMP",   remarks: "")  {constraints(nullable:"false")}  

        }
   createIndex(tableName: "hnlp_tenant_word", indexName: "HNLP_TENANT_WORD_n1") {
            column(name: "TENANT_ID")
        }

    }
}