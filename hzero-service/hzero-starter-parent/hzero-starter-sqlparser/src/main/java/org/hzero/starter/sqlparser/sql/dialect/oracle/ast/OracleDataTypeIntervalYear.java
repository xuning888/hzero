/*
 * Copyright 1999-2018 Alibaba Group Holding Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.hzero.starter.sqlparser.sql.dialect.oracle.ast;

import org.hzero.starter.sqlparser.sql.ast.SQLDataTypeImpl;
import org.hzero.starter.sqlparser.sql.dialect.oracle.visitor.OracleASTVisitor;
import org.hzero.starter.sqlparser.sql.visitor.SQLASTVisitor;

public class OracleDataTypeIntervalYear extends SQLDataTypeImpl implements OracleSQLObject {

    public OracleDataTypeIntervalYear(){
        this.setName("INTERVAL YEAR");
    }

    @Override
    protected void accept0(SQLASTVisitor visitor) {
        this.accept0((OracleASTVisitor) visitor);
    }

    @Override
    public void accept0(OracleASTVisitor visitor) {
        if (visitor.visit(this)) {
            acceptChild(visitor, getArguments());
        }
        visitor.endVisit(this);
    }

    public OracleDataTypeIntervalYear clone() {
        OracleDataTypeIntervalYear x = new OracleDataTypeIntervalYear();

        super.cloneTo(x);

        return x;
    }
}
