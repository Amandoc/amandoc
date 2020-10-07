## 📌 About this Project

본 웹서비스는 포트폴리오 제작을 위해 만들었습니다. <br>
DEMO https://amandoc.herokuapp.com/

###### 아무때나 만나는 내 손 안의 닥터, 아만닥.

#비대면 진료 서비스

아만닥은 의료진 네트워크를 구성해 지속적인 관리가 필요한 고객에게 원격의료서비스를 제공합니다.
일반진료부터 소아, 산부인과 등 다양한 진료 과목을 이용하실 수 있으며, 웹사이트를 통해 진료를 신청할 수 있습니다.

###### This Web Service connects doctors and patients.

#Uncontact

AMANDOC is a healthcare service for the patients who has chronic diseases and needs to care their health continuously.
patients can use AMANDOC web service and see their doctors anywhere, anytime.

<br>
<br>

## Tree Structure

├── README.md
├── app.js
├── combined.log
├── error.log
├── logger.js
├── models
│   ├── Step1.js
│   ├── Step2.js
│   ├── comment.js
│   ├── counter.js
│   ├── index.js
│   ├── patients.js
│   └── qna.js
├── package-lock.json
├── package.json
├── passport
│   ├── index.js
│   ├── kakaoStrategy.js
│   └── localStrategy.js
├── public
│   ├── css
│   │   ├── all.css
│   │   ├── all.css.map
│   │   ├── bootstrap.css
│   │   ├── bootstrap.css.map
│   │   └── responsive.css
│   ├── fonts
│   │   ├── bootstrap
│   │   └── font-awesome-4.3.0
│   │   ├── css
│   │   └── fonts
│   ├── images
│   ├── js
│   │   ├── boardscript.js
│   │   ├── bootstrap.js
│   │   ├── jquery-1.11.2.min.js
│   │   ├── jquery.main.js
│   │   ├── main.js
│   │   ├── validate.js
│   │   └── validate_board.js
│   ├── rts.js
│   ├── scss
│   │   ├── \_bootstrap-custom.scss
│   │   ├── \_mq.scss
│   │   ├── all.scss
│   │   ├── base
│   │   │   └── \_markup-mixins.scss
│   │   ├── bootstrap
│   │   │   └── mixins
│   │   └── bootstrap.scss
│   └── validation_question
│   ├── jquery.validate.min.js
│   ├── step1.js
│   └── step2.js
├── routes
│   ├── auth.js
│   ├── comments.js
│   ├── connect.js
│   ├── doctor.js
│   ├── healthtopic.js
│   ├── index.js
│   ├── middlewares
│   │   └── middlewares.js
│   ├── mypage.js
│   ├── qna.js
│   └── step.js
├── util.js
└── views
├── aboutus.ejs
├── board
│   ├── comment-form.ejs
│   ├── edit.ejs
│   ├── index.ejs
│   ├── new.ejs
│   └── show.ejs
├── browserconfig.xml
├── connect
│   └── index.ejs
├── doctor
│   ├── call.ejs
│   └── index.ejs
├── error.ejs
├── healthtopic.ejs
├── index.ejs
├── login.ejs
├── logjoin
│   ├── findId.ejs
│   ├── findPwd.ejs
│   ├── join.ejs
│   ├── login.ejs
│   └── newPwd.ejs
├── manifest.json
├── mypage
│   ├── index.ejs
│   ├── myPharmacy.ejs
│   └── mytreat.ejs
├── partials
│   ├── footer.ejs
│   ├── head.ejs
│   └── nav.ejs
└── question
├── step1.ejs
└── step2.ejs
