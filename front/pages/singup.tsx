import {NextPage} from "next";
import {SideMenuLayout} from "../src/components/layouts/sideMenuLayout";
import React from "react";
import {Singup} from "../src/components/organisms/singup";
import {Col, Row} from "antd";

const Page: NextPage = () => {
    return (
        <SideMenuLayout>
            <Row justify={"center"}>
                <Col span={12} >
                    <Singup/>
                </Col>
            </Row>
        </SideMenuLayout>    );
};

export default Page;