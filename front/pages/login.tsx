import {NextPage} from "next";
import {Login} from "../src/components/organisms/login";
import React from "react";
import {Col, Layout, Row} from "antd";
// @ts-ignore
import styles from "../src/components/layouts/sideMenuLayout.module.scss";
import {Footer} from "../src/components/organisms/footer";
import { Content } from "antd/lib/layout/layout";

const Page: NextPage = () => {
    return (

        <Layout>
            <Content className={styles.content}>
                <Layout>
                    <div>
                    </div>
                    <Content>
                            <Row justify={"center"}>
                                <Col span={12} >
                                    <Login/>
                                </Col>
                            </Row>
                    </Content>
                </Layout>
            </Content>
            <Footer />
        </Layout>
    );
};

export default Page;