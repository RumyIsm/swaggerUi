import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Authors from './components/Authors';
import Books from './components/Books';
import Activities from './components/Activities';
import './App.css';
import { Layout, Card, Row, Col } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  lineHeight: '64px',
  backgroundColor: '#3E5879',
};

const contentStyle: React.CSSProperties = {
  padding: '24px',
  minHeight: '100vh',
  backgroundColor: '#fff',
};

const cardStyle: React.CSSProperties = {
  textAlign: 'center',
  width: 300,
  cursor: 'pointer',
  margin: '16px',
  backgroundColor:" #F6F4F0"
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Header style={headerStyle}>
          <Link
            to="/"
            style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
          >
           
            <h1 style={{ margin: 0 }}>My Application</h1>
            <HomeOutlined style={{ marginRight: 8, fontSize:"25px" }} />
          </Link>
        </Header>
        <Content style={contentStyle}>
          <Routes>
            <Route
              path="/"
              element={
                <Row justify="center" gutter={[16, 16]}>
                  <Col>
                    <Link to="/authors">
                      <Card title="Authors" style={cardStyle}>
                        View and Manage Authors
                      </Card>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="/books">
                      <Card title="Books" style={cardStyle}>
                        View and Manage Books
                      </Card>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="/activities">
                      <Card title="Activities" style={cardStyle}>
                        View and Manage Activities
                      </Card>
                    </Link>
                  </Col>
                </Row>
              }
            />
            <Route path="/authors" element={<Authors />} />
            <Route path="/books" element={<Books />} />
            <Route path="/activities" element={<Activities />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};

export default App;
