import React, { Component } from 'react';
import {
  SectionNav,
  CmsBox,
  CmsTable,
  TCol,
  BreadCrumbMenu,
  CmsButton,
  CmsTextInput,
  RadioGroup,
  CmsSelect,
  TuiEditor,
  CategoryListGroup,
  CmsPager,
  CmsFileInput,
  CmsRow,
  CmsTextarea,
} from '../../components';

import './TestDocPage.css';

class TestDocPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeRadio: '외부 사이트',
      category: '컨텐츠',
    }
  }

  render() {
    return (
      <section id='test-doc-page'>
        {/* CmsBox */}
        <article>
          <h1>CmsBox 컴퍼넌트</h1>
          <pre className='desc'>
            moshu-cms에서 사용하는 공통 박스 컴퍼넌트 입니다.<br />
            boxType 프로퍼티 속성에따라 다른 padding을 가진 래퍼 박스를 생성합니다.
          </pre>
          <h3>boxType: none</h3>
          <CmsBox style={{ marginBottom: 10 }}>내용</CmsBox>
          <h3>boxType: content</h3>
          <CmsBox boxType='content'>내용</CmsBox>
        </article>

        {/* CmsButton */}
        <article>
          <h1>CmsButton 컴퍼넌트</h1>
          <pre className='desc'>
            moshu-cms에서 사용하는 공통 버튼 컴퍼넌트입니다.<br />
            /styles/color.scss 의 $color-primary의 값에따라 색상이 바뀝니다.<br />
            btnType에 따라 미리 정의된 크기의 버튼을 생성합니다.
          </pre>
          <CmsButton style={{ marginRight: 10 }} btnType='small'>btnType: small</CmsButton>
          <CmsButton style={{ marginRight: 10 }} btnType='mid'>btnType: mid</CmsButton>
          <CmsButton style={{ marginRight: 10 }} btnType='big'>btnType: big</CmsButton>
        </article>

        {/* BreadCrumbMenu */}
        <article>
          <h1>BreadCrumbMenu 컴퍼넌트</h1>
          <pre className='desc'>
            SectionNav의 left 프로퍼티로 자주 사용합니다.
          </pre>
          <BreadCrumbMenu list={[
            { title: 'test1', to: '/test' },
            { title: 'test2', to: '/' },
            { title: 'test3' },
          ]} />
        </article>

        {/* SectionNav */}
        <article>
          <h1>SectionNav 컴퍼넌트</h1>
          <pre className='desc'>
            각 페이지 상단에서 "제목"의 역할을 해주거나,<br />
            BreadCrumbMenu와 함께 쓰여 네비게이션 인디케이터 역할을 수행합니다.
          </pre>
          <SectionNav left='왼쪽 컴퍼넌트' right={<CmsButton btnType='big'>업로드</CmsButton>} />
        </article>

        {/* CmsTable */}
        <article>
          <h1>CmsTable 컴퍼넌트</h1>
          <pre className='desc'>
            th와 td의 스타일이 moshu-cms에 맞게 미리 정의된 CmsTable 컴퍼넌트입니다.<br />
            일반 테이블과 사용법이 같으나 th와 td대신 TCol을 사용합니다. (props를 통한 간편한 스타일링)
          </pre>
          <CmsTable>
            <thead>
              <tr>
                <TCol head>구분</TCol>
                <TCol head>아이디</TCol>
                <TCol head size={50}>강좌명</TCol>
                <TCol head center>강좌 객수 ( 남은강좌 )</TCol>
                <TCol head center>결제 일자</TCol>
                <TCol head center>결제 구분</TCol>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TCol color='black'>택배</TCol>
                <TCol color='red'>dada1263</TCol>
                <TCol color='primary'>대분류 > 중분류 > 세부 분류 ( A )</TCol>
                <TCol center>00 ( 00 )</TCol>
                <TCol center>0000.00.00</TCol>
                <TCol center>휴대폰</TCol>
              </tr>
              <tr>
                <TCol color='black'>택배</TCol>
                <TCol color='red'>dada1263</TCol>
                <TCol color='primary'>대분류 > 중분류 > 세부 분류 ( A )</TCol>
                <TCol center>00 ( 00 )</TCol>
                <TCol center>0000.00.00</TCol>
                <TCol center>휴대폰</TCol>
              </tr>
            </tbody>
          </CmsTable>
        </article>

        {/* CmsTextInput */}
        <article>
          <h1>CmsTextInput 컴퍼넌트</h1>
          <pre className='desc'>
            input type='text' 와 CmsBtm을 하나로 합쳐놓은 컴퍼넌트입니다.
          </pre>
          <CmsTextInput
            wrapperStyle={{ border: '1px solid #BEBEBE', width: 500, marginBottom: 10 }} />
          <CmsTextInput
            wrapperStyle={{ border: '1px solid #BEBEBE', width: 500, marginBottom: 10 }}
            withBtn
            btnType='small'
            btnValue='확인' />
        </article>

        {/* CmsFileInput */}
        <article>
          <h1>CmsFileInput 컴퍼넌트</h1>
          <pre className='desc'>
            input type='file' 와 CmsBtm을 하나로 합쳐놓은 컴퍼넌트입니다.
          </pre>
          <CmsFileInput
            wrapperStyle={{ border: '1px solid #BEBEBE', width: 500, marginBottom: 10 }} />
        </article>

        {/* CmsTextarea */}
        <article>
          <h1>CmsTextarea 컴퍼넌트</h1>
          <pre className='desc'>
            CmsTextInput textarea 버젼
          </pre>
          <CmsTextarea
            style={{ border: '1px solid #BEBEBE', width: 500, marginBottom: 10 }} />
        </article>

        {/* RadioGroup */}
        <article>
          <h1>RadioGroup 컴퍼넌트</h1>
          <pre className='desc'>
            라디오 그룹
          </pre>
          <RadioGroup
            values={['외부 사이트', '유튜브', '자체 게시글']}
            activeValue={this.state.activeRadio}
            onChange={(v) => this.setState({ activeRadio: v })} />
        </article>

        {/* CmsSelect */}
        <article>
          <h1>CmsSelect 컴퍼넌트</h1>
          <pre className='desc'>
            react-select의 커스텀 스타일 wrapper 컴퍼넌트입니다.
          </pre>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <CmsSelect selectType='small' options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]} />
            <CmsSelect selectType='mid' options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]} />
            <CmsSelect selectType='big' options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' }
            ]} />
          </div>
        </article>

        {/* TuiEditor */}
        <article>
          <h1>TuiEditor 컴퍼넌트</h1>
          <pre className='desc'>
            TuiEditor를 리액트에서 사용할 수 있도록 래핑한 컴퍼넌트 입니다.
            @link : https://github.com/nhnent/tui.editor
          </pre>
          <div style={{ height: 500 }}>
            <TuiEditor height='500px' style={{ width: 1255 }} />
          </div>
        </article>

        {/* CategoryListGroup */}
        <article>
          <h1>CategoryListGroup 컴퍼넌트</h1>
          <pre className='desc'>
            카테고리 리스트 컴퍼넌트
          </pre>
          <div style={{ width: 200 }}>
            <CategoryListGroup
              title='카테고리'
              list={[{ text: '컨텐츠' }, { text: '교육' }, { text: '뉴스' }]}
              activeValue={this.state.category}
              onChange={({ text }) => this.setState({ category: text })} />
          </div>
        </article>

        {/* CmsPager */}
        <article>
          <h1>CmsPager 컴퍼넌트</h1>
          <pre className='desc'>
            pager 컴퍼넌트
          </pre>
          <CmsPager
            maxPage={10}
            pagePerBlock={4}
            center
            onChange={(page) => console.warn(page)} />
        </article>

        {/* CmsRow */}
        <article>
          <h1>CmsRow 컴퍼넌트</h1>
          <pre className='desc'>
            "제목: 내용" 식의 컴퍼넌트로 주로 CmsTextInput과 함꼐 사용됨
          </pre>
          <CmsRow title='제목'>
            <CmsTextInput
              wrapperStyle={{ border: '1px solid #BEBEBE', height: 49 }} />
          </CmsRow>
        </article>
      </section>
    )
  }
}

export default TestDocPage;
