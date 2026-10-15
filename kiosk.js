(() => {
'use strict';

/* =========================================================
 *  다국어 문구
 * ========================================================= */
const I18N = {
  ko: {
    'card.summary': '객실 · 인원', 'res.summary': '{r}실 · 총 {n}명', 'room.line': '{type} · 성인 {n}명', 'room.title': '객실 {r}개 · 총 {n}명',
    'pm.staff.title': '직원 원격 성인 인증 중',
    'pm.staff.wait': '직원이 원격으로 성인 인증을 처리하고 있습니다.\n잠시만 기다려주세요.',
    'pm.staff.done': '인증 처리가 완료되었습니다.\n잠시 후 다음 단계로 넘어갑니다.',
    'pm.staff.note': '직원 응답이 없는 경우, 1644-5442로 연락 부탁드립니다',
    'pm.stop.title': '성인 인증 중단', 'pm.stop.desc': '성인 인증을 중단하고 처음 화면으로 돌아가시겠습니까?',
    'pm.dup.title': '이미 확인된 신분증입니다',
    'pm.dup.desc': '동일한 신분증은 사용할 수 없습니다.\n각 투숙객은 고유한 신분증을 제시해 주세요.',
    'btn.back': '돌아가기', 'btn.stopAuth': '성인 인증 중단', 'btn.retryId': '신분증 인식 재시도',
    'main.title': '메인 화면 상단 문구',
    'main.sub': '메인 화면 하단 1 문구\n메인 화면 하단 2 문구',
    'main.daesil': '대실', 'main.sukbak': '숙박', 'main.checkin': '체크인', 'main.checkout': '체크아웃',
    'main.roomcheck': '객실 번호 확인',
    'lookup.title': '예약 조회 방법을 선택해 주세요',
    'tab.name': '예약자명', 'tab.number': '예약번호', 'tab.qr': 'QR 코드',
    'desc.name': '숙박앱에서 예약하신 예약자명을 아래 화면에\n입력해 주세요',
    'desc.number': '예약 시 문자로 안내 받은 예약번호 숫자 4자리를\n아래 화면에 입력해 주세요',
    'desc.qr': '예약 시 문자로 발급 받은 QR 코드를\n아래 그림과 같이 키오스크 하단에 인식해 주세요',
    'ph.name': '예약자명', 'ph.number': '예약번호 4자리',
    'btn.lookup': '예약 확인', 'key.clear': '모두 정정', 'key.del': '지우기',
    'list.title': '복수의 예약 확인',
    'list.sub': '입력하신 예약자명으로 복수의 예약건이 확인되었습니다.\n본인의 예약건을 선택해주세요',
    'card.name': '예약자명', 'card.in': '입실 시간', 'card.out': '퇴실 시간', 'card.room': '객실',
    'card.type': '예약 타입', 'card.platform': '플랫폼', 'card.no': '예약번호',
    'btn.select': '선택', 'btn.next': '다음', 'btn.cancel': '취소', 'btn.ok': '확인',
    'modal.title': '예약 세부 정보 확인', 'modal.roomtype': '객실 타입',
    'modal.w1': '본인의 예약이 맞는지 다시 한번 확인해 주세요.',
    'modal.w2': '잘못된 예약 건으로 인한 책임은 투숙객 본인에게 있습니다.',
    'modal.w3': '확인을 누르시면 선택한 예약으로 체크인이 진행됩니다. 신중하게 확인 후 선택해 주세요.',
    'guests.title': '투숙 인원 수를 설정해 주세요', 'guests.max': '최대 {n}명까지 선택 가능합니다', 'guests.adult': '성인',
    'guests.notice': '투숙객 중 1명이라도 성인 인증을 하지 않아 발생하는\n모든 책임은 투숙객에게 있습니다.',
    'btn.agree': '동의 후 다음',
    'id.title': '신분증을 준비해 주세요',
    'id.prep': '신분증을 아래 이미지 안에 위치시켜 주신 후,\n다음 버튼을 눌러주세요.',
    'id.progress': '투숙 인원 {n}명 중 {i}명 진행 중',
    'id.all': '투숙객 모두 본인 신분증으로 성인 인증을 진행하여야 합니다.\n이를 어길 시 모든 책임은 투숙객에게 있습니다.',
    'fail.title': '성인 인증 필요',
    'fail.desc': '아래 그림과 같이 기기 하단의 신분증 스캐너에\n신분증 정면이 위를 향하도록 신분증을 넣어주세요.',
    'btn.staff': '직원 승인 요청',
    'ok.title': '투숙객의\n성인 인증이 성공했습니다.', 'ok.progress': '투숙 인원 {n}명 중 {i}명 성공', 'ok.ing': '진행 중',
    'issue.confirmed': '예약이 확인되었습니다.', 'issue.title': '객실 키를 발급하는 중입니다', 'issue.wait': '잠시만 기다려 주세요...',
    'room.type': '객실 타입 {n}', 'room.cap': '기본 {b}인 / 최대 {m}인', 'room.amen': '편의시설 정보',
    'done.title': '객실 키가 발급되었습니다.', 'done.coTitle': '체크아웃이 완료되었습니다.', 'done.thanks': '이용해 주셔서 감사합니다.',
    'btn.again': '추가 체크인', 'btn.againCo': '추가 체크아웃', 'btn.first': '처음 화면으로',
    'done.back': '초 뒤에 첫 화면으로 돌아갑니다.',
    'foot.age': '19세 미만 이용금지', 'foot.tel1': '이용·구매문의 1644-5442', 'foot.tel2': '이용불편문의 1644-5442',
    'res.stay': '숙박', 'res.day': '대실', 'room.no': '{n}호',
    'err.title': '예약 조회 실패', 'err.method': '조회 방법', 'err.input': '입력 정보', 'err.result': '조회 결과', 'err.none': '일치하는 예약 없음',
    'err.w1': '일치하는 예약 정보를 찾을 수 없습니다.', 'err.w2': '입력하신 정보를 다시 확인해 주세요.',
    'err.w3': '계속 확인되지 않으면 이용불편문의 1644-5442로 연락해 주세요.',
    'co.title': '체크아웃 확인', 'co.w1': '체크아웃을 진행하시겠습니까?', 'co.w2': '사용하신 객실 키를 키오스크에 반납해 주세요.',
    'co.w3': '확인을 누르시면 선택한 예약의 체크아웃이 완료됩니다.',
    'rc.title': '객실 번호 확인', 'rc.w1': '배정된 객실 번호를 확인해 주세요.', 'rc.w2': '객실 키 분실 시 이용불편문의로 연락해 주세요.',
    'rc.w3': '확인을 누르시면 메인 화면으로 이동합니다.',
    'date': '{M}월 {D}일 {h}시 {m}분',
  },
  en: {
    'card.summary': 'Rooms · Guests', 'res.summary': '{r} rooms · {n} guests', 'room.line': '{type} · {n} adults', 'room.title': '{r} rooms · {n} guests',
    'pm.staff.title': 'Remote Staff Verification',
    'pm.staff.wait': 'A staff member is verifying your age remotely.\nPlease wait a moment.',
    'pm.staff.done': 'Verification is complete.\nMoving to the next step shortly.',
    'pm.staff.note': 'If staff does not respond, please call 1644-5442',
    'pm.stop.title': 'Stop Verification', 'pm.stop.desc': 'Stop adult verification and return to the start screen?',
    'pm.dup.title': 'This ID was already verified',
    'pm.dup.desc': 'The same ID cannot be used twice.\nEach guest must present their own ID.',
    'btn.back': 'Go Back', 'btn.stopAuth': 'Stop Verification', 'btn.retryId': 'Scan ID Again',
    'main.title': 'Main Screen Headline',
    'main.sub': 'Main screen subtext 1\nMain screen subtext 2',
    'main.daesil': 'Day Use', 'main.sukbak': 'Stay', 'main.checkin': 'Check-in', 'main.checkout': 'Check-out',
    'main.roomcheck': 'Find My Room Number',
    'lookup.title': 'How would you like to find your booking?',
    'tab.name': 'Name', 'tab.number': 'Booking No.', 'tab.qr': 'QR Code',
    'desc.name': 'Enter the guest name you used\nwhen booking in the app',
    'desc.number': 'Enter the 4-digit booking number\nsent to you by text message',
    'desc.qr': 'Hold the QR code sent to you by text\nunder the kiosk scanner as shown below',
    'ph.name': 'Guest name', 'ph.number': '4-digit booking number',
    'btn.lookup': 'Find Booking', 'key.clear': 'Clear', 'key.del': 'Delete',
    'list.title': 'Multiple Bookings Found',
    'list.sub': 'Multiple bookings were found under the name you entered.\nPlease select your booking',
    'card.name': 'Name', 'card.in': 'Check-in', 'card.out': 'Check-out', 'card.room': 'Room',
    'card.type': 'Type', 'card.platform': 'Platform', 'card.no': 'Booking No.',
    'btn.select': 'Select', 'btn.next': 'Next', 'btn.cancel': 'Cancel', 'btn.ok': 'OK',
    'modal.title': 'Confirm Booking Details', 'modal.roomtype': 'Room type',
    'modal.w1': 'Please make sure this is your booking.',
    'modal.w2': 'Guests are responsible for choosing the wrong booking.',
    'modal.w3': 'Pressing OK starts check-in with the selected booking. Please check carefully.',
    'guests.title': 'Set the number of guests', 'guests.max': 'Up to {n} guests', 'guests.adult': 'Adults',
    'guests.notice': 'Guests are fully responsible for any issue caused\nby a guest not completing adult verification.',
    'btn.agree': 'Agree & Next',
    'id.title': 'Please prepare your ID',
    'id.prep': 'Place your ID as shown in the image below,\nthen press Next.',
    'id.progress': 'Verifying guest {i} of {n}',
    'id.all': 'Every guest must complete adult verification with their own ID.\nGuests are fully responsible for any violation.',
    'fail.title': 'Adult Verification Required',
    'fail.desc': 'Insert your ID face up into the ID scanner\nat the bottom of the kiosk as shown below.',
    'btn.staff': 'Request Staff',
    'ok.title': 'Adult verification\nwas successful.', 'ok.progress': '{i} of {n} guests verified', 'ok.ing': 'In progress',
    'issue.confirmed': 'Your booking has been confirmed.', 'issue.title': 'Issuing your room key', 'issue.wait': 'Please wait a moment...',
    'room.type': 'Room Type {n}', 'room.cap': 'Standard {b} / Max {m} guests', 'room.amen': 'Amenities',
    'done.title': 'Your room key has been issued.', 'done.coTitle': 'Check-out is complete.', 'done.thanks': 'Thank you for staying with us.',
    'btn.again': 'Check In Again', 'btn.againCo': 'Check Out Again', 'btn.first': 'Back to Start',
    'done.back': 'seconds until returning to the start screen.',
    'foot.age': 'No entry under 19', 'foot.tel1': 'Inquiries 1644-5442', 'foot.tel2': 'Help desk 1644-5442',
    'res.stay': 'Stay', 'res.day': 'Day Use', 'room.no': 'Room {n}',
    'err.title': 'Booking Not Found', 'err.method': 'Search by', 'err.input': 'Entered', 'err.result': 'Result', 'err.none': 'No match',
    'err.w1': 'No matching booking was found.', 'err.w2': 'Please check the information you entered.',
    'err.w3': 'If the problem continues, please call 1644-5442.',
    'co.title': 'Confirm Check-out', 'co.w1': 'Would you like to check out?', 'co.w2': 'Please return your room key to the kiosk.',
    'co.w3': 'Pressing OK completes check-out for the selected booking.',
    'rc.title': 'Your Room Number', 'rc.w1': 'Please check your assigned room number.', 'rc.w2': 'If you lost your room key, please call the help desk.',
    'rc.w3': 'Pressing OK returns to the main screen.',
    'date': '{M}/{D} {h}:{m}',
  },
  ja: {
    'card.summary': '客室 · 人数', 'res.summary': '{r}室 · 計{n}名', 'room.line': '{type} · 大人{n}名', 'room.title': '客室{r}室 · 計{n}名',
    'pm.staff.title': 'スタッフによる遠隔成人認証中',
    'pm.staff.wait': 'スタッフが遠隔で成人認証を処理しています。\n少々お待ちください。',
    'pm.staff.done': '認証処理が完了しました。\nまもなく次のステップに進みます。',
    'pm.staff.note': 'スタッフの応答がない場合は 1644-5442 までご連絡ください',
    'pm.stop.title': '成人認証の中断', 'pm.stop.desc': '成人認証を中断して最初の画面に戻りますか？',
    'pm.dup.title': 'すでに確認済みの身分証です',
    'pm.dup.desc': '同じ身分証は使用できません。\n宿泊者ごとに本人の身分証を提示してください。',
    'btn.back': '戻る', 'btn.stopAuth': '成人認証を中断', 'btn.retryId': '身分証を再認識',
    'main.title': 'メイン画面上部の文言',
    'main.sub': 'メイン画面下部の文言 1\nメイン画面下部の文言 2',
    'main.daesil': 'デイユース', 'main.sukbak': '宿泊', 'main.checkin': 'チェックイン', 'main.checkout': 'チェックアウト',
    'main.roomcheck': '客室番号の確認',
    'lookup.title': '予約の照会方法を選択してください',
    'tab.name': '予約者名', 'tab.number': '予約番号', 'tab.qr': 'QRコード',
    'desc.name': '宿泊アプリで予約した予約者名を\n下の画面に入力してください',
    'desc.number': '予約時にSMSで届いた4桁の予約番号を\n下の画面に入力してください',
    'desc.qr': '予約時にSMSで届いたQRコードを\n下図のようにキオスク下部にかざしてください',
    'ph.name': '予約者名', 'ph.number': '予約番号4桁',
    'btn.lookup': '予約確認', 'key.clear': '全て消去', 'key.del': '削除',
    'list.title': '複数の予約確認',
    'list.sub': '入力された予約者名で複数の予約が見つかりました。\nご本人の予約を選択してください',
    'card.name': '予約者名', 'card.in': 'チェックイン', 'card.out': 'チェックアウト', 'card.room': '客室',
    'card.type': '予約タイプ', 'card.platform': 'プラットフォーム', 'card.no': '予約番号',
    'btn.select': '選択', 'btn.next': '次へ', 'btn.cancel': 'キャンセル', 'btn.ok': '確認',
    'modal.title': '予約詳細の確認', 'modal.roomtype': '客室タイプ',
    'modal.w1': 'ご本人の予約か今一度ご確認ください。',
    'modal.w2': '誤った予約による責任はお客様ご本人にあります。',
    'modal.w3': '確認を押すと選択した予約でチェックインが進みます。慎重にご確認ください。',
    'guests.title': '宿泊人数を設定してください', 'guests.max': '最大{n}名まで選択できます', 'guests.adult': '大人',
    'guests.notice': '宿泊者のうち1名でも成人認証を行わずに発生した\nすべての責任は宿泊者にあります。',
    'btn.agree': '同意して次へ',
    'id.title': '身分証をご用意ください',
    'id.prep': '身分証を下の画像の位置に置いてから、\n次へボタンを押してください。',
    'id.progress': '宿泊人数{n}名中{i}名目を確認中',
    'id.all': '宿泊者全員がご本人の身分証で成人認証を行う必要があります。\n違反した場合の責任はすべて宿泊者にあります。',
    'fail.title': '成人認証が必要です',
    'fail.desc': '下図のように本体下部の身分証スキャナーに\n身分証の表面を上にして入れてください。',
    'btn.staff': 'スタッフ承認を依頼',
    'ok.title': '宿泊者の\n成人認証に成功しました。', 'ok.progress': '宿泊人数{n}名中{i}名成功', 'ok.ing': '進行中',
    'issue.confirmed': '予約が確認されました。', 'issue.title': 'ルームキーを発行しています', 'issue.wait': '少々お待ちください...',
    'room.type': '客室タイプ {n}', 'room.cap': '基本{b}名 / 最大{m}名', 'room.amen': '設備情報',
    'done.title': 'ルームキーが発行されました。', 'done.coTitle': 'チェックアウトが完了しました。', 'done.thanks': 'ご利用ありがとうございます。',
    'btn.again': '追加チェックイン', 'btn.againCo': '追加チェックアウト', 'btn.first': '最初の画面へ',
    'done.back': '秒後に最初の画面に戻ります。',
    'foot.age': '19歳未満利用禁止', 'foot.tel1': 'お問い合わせ 1644-5442', 'foot.tel2': 'お困りの際は 1644-5442',
    'res.stay': '宿泊', 'res.day': 'デイユース', 'room.no': '{n}号室',
    'err.title': '予約が見つかりません', 'err.method': '照会方法', 'err.input': '入力内容', 'err.result': '照会結果', 'err.none': '該当なし',
    'err.w1': '一致する予約情報が見つかりません。', 'err.w2': '入力内容をもう一度ご確認ください。',
    'err.w3': '解決しない場合は 1644-5442 までご連絡ください。',
    'co.title': 'チェックアウトの確認', 'co.w1': 'チェックアウトしますか？', 'co.w2': 'ルームキーをキオスクに返却してください。',
    'co.w3': '確認を押すと選択した予約のチェックアウトが完了します。',
    'rc.title': '客室番号の確認', 'rc.w1': '割り当てられた客室番号をご確認ください。', 'rc.w2': 'ルームキーを紛失した場合はお問い合わせください。',
    'rc.w3': '確認を押すとメイン画面に戻ります。',
    'date': '{M}月{D}日 {h}時{m}分',
  },
  zh: {
    'card.summary': '房间 · 人数', 'res.summary': '{r}间 · 共{n}人', 'room.line': '{type} · 成人{n}人', 'room.title': '{r}间客房 · 共{n}人',
    'pm.staff.title': '员工远程成人验证中',
    'pm.staff.wait': '员工正在远程处理成人验证。\n请稍候。',
    'pm.staff.done': '验证已完成。\n即将进入下一步。',
    'pm.staff.note': '如员工无应答，请拨打 1644-5442',
    'pm.stop.title': '中止成人验证', 'pm.stop.desc': '确定要中止成人验证并返回首页吗？',
    'pm.dup.title': '该身份证件已验证',
    'pm.dup.desc': '同一身份证件不可重复使用。\n每位住客须出示本人身份证件。',
    'btn.back': '返回', 'btn.stopAuth': '中止成人验证', 'btn.retryId': '重新识别证件',
    'main.title': '主画面上方文字',
    'main.sub': '主画面下方文字 1\n主画面下方文字 2',
    'main.daesil': '钟点房', 'main.sukbak': '住宿', 'main.checkin': '入住', 'main.checkout': '退房',
    'main.roomcheck': '查询房间号',
    'lookup.title': '请选择预订查询方式',
    'tab.name': '预订人姓名', 'tab.number': '预订编号', 'tab.qr': '二维码',
    'desc.name': '请在下方输入您在住宿App中\n预订时使用的预订人姓名',
    'desc.number': '请在下方输入预订时\n短信收到的4位预订编号',
    'desc.qr': '请按下图所示，将预订时短信收到的\n二维码对准自助机下方进行识别',
    'ph.name': '预订人姓名', 'ph.number': '4位预订编号',
    'btn.lookup': '查询预订', 'key.clear': '全部清除', 'key.del': '删除',
    'list.title': '查询到多个预订',
    'list.sub': '根据您输入的预订人姓名查询到多个预订。\n请选择您本人的预订',
    'card.name': '预订人', 'card.in': '入住时间', 'card.out': '退房时间', 'card.room': '房间',
    'card.type': '预订类型', 'card.platform': '平台', 'card.no': '预订编号',
    'btn.select': '选择', 'btn.next': '下一步', 'btn.cancel': '取消', 'btn.ok': '确认',
    'modal.title': '确认预订详情', 'modal.roomtype': '房型',
    'modal.w1': '请再次确认是否为本人的预订。',
    'modal.w2': '因选择错误预订产生的责任由住客本人承担。',
    'modal.w3': '点击确认后将按所选预订办理入住，请仔细确认后选择。',
    'guests.title': '请设置入住人数', 'guests.max': '最多可选择{n}人', 'guests.adult': '成人',
    'guests.notice': '如有任何一位住客未进行成人验证，\n由此产生的一切责任由住客承担。',
    'btn.agree': '同意并继续',
    'id.title': '请准备身份证件',
    'id.prep': '请将身份证件放在下图所示位置后，\n点击下一步按钮。',
    'id.progress': '入住{n}人中第{i}人验证中',
    'id.all': '所有住客均须使用本人身份证件进行成人验证。\n如有违反，一切责任由住客承担。',
    'fail.title': '需要成人验证',
    'fail.desc': '请按下图所示，将身份证件正面朝上\n放入设备下方的证件扫描器。',
    'btn.staff': '请求员工批准',
    'ok.title': '住客\n成人验证成功。', 'ok.progress': '入住{n}人中{i}人验证成功', 'ok.ing': '进行中',
    'issue.confirmed': '预订已确认。', 'issue.title': '正在发放房卡', 'issue.wait': '请稍候...',
    'room.type': '房型 {n}', 'room.cap': '标准{b}人 / 最多{m}人', 'room.amen': '设施信息',
    'done.title': '房卡已发放。', 'done.coTitle': '退房已完成。', 'done.thanks': '感谢您的光临。',
    'btn.again': '继续办理入住', 'btn.againCo': '继续办理退房', 'btn.first': '返回首页',
    'done.back': '秒后返回首页。',
    'foot.age': '未满19岁禁止使用', 'foot.tel1': '咨询电话 1644-5442', 'foot.tel2': '服务热线 1644-5442',
    'res.stay': '住宿', 'res.day': '钟点房', 'room.no': '{n}号房',
    'err.title': '未找到预订', 'err.method': '查询方式', 'err.input': '输入信息', 'err.result': '查询结果', 'err.none': '无匹配预订',
    'err.w1': '未找到匹配的预订信息。', 'err.w2': '请再次确认您输入的信息。',
    'err.w3': '如仍无法确认，请拨打 1644-5442。',
    'co.title': '确认退房', 'co.w1': '确定要办理退房吗？', 'co.w2': '请将房卡归还至自助机。',
    'co.w3': '点击确认后将完成所选预订的退房。',
    'rc.title': '查询房间号', 'rc.w1': '请确认为您分配的房间号。', 'rc.w2': '如房卡丢失，请联系服务热线。',
    'rc.w3': '点击确认后将返回主画面。',
    'date': '{M}月{D}日 {h}时{m}分',
  },
};

/* =========================================================
 *  예약 데이터 (데모)
 * ========================================================= */
const today = new Date();
const at = (dayOffset, h, m) => { const d = new Date(today); d.setDate(d.getDate() + dayOffset); d.setHours(h, m, 0, 0); return d; };
const day = (m, d, h, mi) => new Date(today.getFullYear(), m - 1, d, h, mi);
const RESERVATIONS = [
  {
    name: '김코드', no: '0000', platform: '여기어때', kind: 'stay',
    in: day(10, 8, 14, 0), out: day(10, 9, 10, 0),
    rooms: [{ room: '101', type: '디럭스 더블', adults: 2 }, { room: '102', type: '디럭스 트윈', adults: 2 }],
  },
  {
    name: '최하늘', no: '5555', platform: '야놀자', kind: 'stay',
    in: day(10, 10, 14, 0), out: day(10, 12, 10, 0),
    rooms: [{ room: '201', type: '프리미어 스위트', adults: 2 }, { room: '202', type: '패밀리 트윈', adults: 3 }],
  },
].map(r => ({ ...r, total: r.rooms.reduce((n, x) => n + x.adults, 0) }));
const roomNos = r => r.rooms.map(x => t('room.no', { n: x.room })).join(', ');
const roomType = name => (ROOM_TYPES[S.lang] && ROOM_TYPES[S.lang][name]) || name;
const ROOM_TYPES = {
  en: { '디럭스 더블': 'Deluxe Double', '디럭스 트윈': 'Deluxe Twin', '프리미어 스위트': 'Premier Suite', '패밀리 트윈': 'Family Twin', '스탠다드 더블': 'Standard Double' },
  ja: { '디럭스 더블': 'デラックスダブル', '디럭스 트윈': 'デラックスツイン', '프리미어 스위트': 'プレミアスイート', '패밀리 트윈': 'ファミリーツイン', '스탠다드 더블': 'スタンダードダブル' },
  zh: { '디럭스 더블': '豪华大床房', '디럭스 트윈': '豪华双床房', '프리미어 스위트': '尊享套房', '패밀리 트윈': '家庭双床房', '스탠다드 더블': '标准大床房' },
};

/* =========================================================
 *  상태
 * ========================================================= */
const S = {
  lang: 'ko',
  flow: 'checkin',          // checkin | walkin | checkout | roomcheck
  walkKind: 'stay',
  screen: 'lang',
  history: [],
  tab: 'name',
  matches: [],
  selected: -1,
  res: null,
  guests: 2,
  guestIdx: 1,
  timers: [],
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const t = (key, vars) => {
  let s = (I18N[S.lang] && I18N[S.lang][key]) ?? I18N.ko[key] ?? key;
  if (vars) for (const k in vars) s = s.split('{' + k + '}').join(vars[k]);
  return s;
};
const pad = n => String(n).padStart(2, '0');
const fmtLong = d => t('date', { M: pad(d.getMonth() + 1), D: pad(d.getDate()), h: pad(d.getHours()), m: pad(d.getMinutes()) });
const fmtShort = d => `${pad(d.getMonth() + 1)}/${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
const later = (fn, ms) => { const id = setTimeout(fn, ms); S.timers.push(id); return id; };
const clearTimers = () => { S.timers.forEach(id => { clearTimeout(id); clearInterval(id); }); S.timers = []; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* =========================================================
 *  화면 맞춤 (1080×1920 → 창 크기)
 * ========================================================= */
const stage = $('#stage');
function fit() {
  const k = Math.min(innerWidth / 1080, innerHeight / 1920);
  stage.style.transform = `scale(${k})`;
}
addEventListener('resize', fit); fit();

/* =========================================================
 *  시계
 * ========================================================= */
function tick() {
  const d = new Date();
  const s = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
  $$('.clock').forEach(el => { el.textContent = s; });
}
tick(); setInterval(tick, 1000);

/* =========================================================
 *  화면 전환
 * ========================================================= */
const CHROME = {
  lang:     {},
  main:     { footer: 'main' },
  lookup:   { clock: 'std', nav: 'std', footer: 'a' },
  name:     { clock: 'std', nav: 'std', footer: 'a' },
  number:   { clock: 'std', nav: 'std', footer: 'a' },
  list:     { clock: 'list', nav: 'list', footer: 'b' },
  guests:   { clock: 'guest', nav: 'sm', footer: 'c1' },
  idprep:   { clock: 'guest', footer: 'c2' },
  idperson: { clock: 'guest', footer: 'c2' },
  idfail:   { footer: 'd' },
  idok:     { footer: 'c3' },
  issuing:  { clock: 'key', footer: 'b' },
  done:     { clock: 'key', footer: 'b' },
};
const chrome = $('#chrome');

function go(id, { push = true } = {}) {
  clearTimers();
  closeModal();
  if (typeof closePm === 'function') closePm();
  if (push && S.screen && S.screen !== id) S.history.push(S.screen);
  S.screen = id;
  $$('.screen').forEach(el => el.classList.toggle('active', el.id === 's-' + id));
  const c = CHROME[id] || {};
  for (const k of ['clock', 'nav', 'footer']) {
    if (c[k]) chrome.dataset[k] = c[k]; else delete chrome.dataset[k];
  }
  $('#foot-tel').textContent = t(id === 'main' ? 'foot.tel1' : 'foot.tel2');
  (ENTER[id] || (() => {}))();
}
function back() {
  const prev = S.history.pop();
  if (prev) go(prev, { push: false }); else goHome();
}
function goHome() { S.history = []; go('main', { push: false }); }
function goStart() { S.history = []; go('lang', { push: false }); }

$('#nav-back').addEventListener('click', back);
$('#nav-home').addEventListener('click', goHome);

/* =========================================================
 *  언어 적용
 * ========================================================= */
function applyLang() {
  document.documentElement.lang = S.lang;
  $$('[data-i]').forEach(el => { el.textContent = t(el.dataset.i); });
  $$('.chips button').forEach(b => b.classList.toggle('on', b.dataset.lang === S.lang));
  $$('.lang-opt').forEach(b => b.classList.toggle('on', b.dataset.lang === S.lang));
  $('#foot-tel').textContent = t(S.screen === 'main' ? 'foot.tel1' : 'foot.tel2');
  inputs.forEach(inp => inp.render());
  $$('.pane').forEach(p => { const d = $('.desc', p); if (d) d.textContent = t(d.dataset.k); });
  $$('.keypad .small').forEach(b => { b.textContent = t('key.clear'); });
  $$('.keypad .del span').forEach(s => { s.textContent = t('key.del'); });
  if (ENTER[S.screen] && ['list', 'guests', 'idperson', 'idok', 'issuing', 'done'].includes(S.screen)) REFRESH[S.screen]?.();
}
function setLang(l) { S.lang = l; applyLang(); }

$$('.lang-opt').forEach(b => b.addEventListener('click', () => {
  setLang(b.dataset.lang);
  later(() => go('main'), 220);
}));
$$('.chips button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* =========================================================
 *  메인
 * ========================================================= */
$$('[data-go]').forEach(b => b.addEventListener('click', () => {
  const g = b.dataset.go;
  if (g === 'home') return goStart();
  if (g === 'idperson') { S.guestIdx = 1; return go('idperson'); }
  if (g.startsWith('walkin')) {
    S.flow = 'walkin';
    S.walkKind = g.endsWith('daesil') ? 'day' : 'stay';
    S.res = {
      name: '-', no: '-', kind: S.walkKind, platform: 'KIOSK', total: 2,
      rooms: [{ room: '305', type: '스탠다드 더블', adults: 2 }],
      in: new Date(), out: S.walkKind === 'day' ? new Date(Date.now() + 4 * 3600e3) : at(1, 10, 0),
    };
    return go('guests');
  }
  if (g === 'checkin') { S.flow = 'checkin'; return go('lookup'); }
  if (g === 'checkout') { S.flow = 'checkout'; return go('number'); }
  if (g === 'roomcheck') { S.flow = 'roomcheck'; return go('name'); }
}));

/* =========================================================
 *  한글 오토마타
 * ========================================================= */
const CHO = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
const JUNG = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ';
const JONG = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
const V2 = { 'ㅗㅏ': 'ㅘ', 'ㅗㅐ': 'ㅙ', 'ㅗㅣ': 'ㅚ', 'ㅜㅓ': 'ㅝ', 'ㅜㅔ': 'ㅞ', 'ㅜㅣ': 'ㅟ', 'ㅡㅣ': 'ㅢ' };
const C2 = { 'ㄱㅅ': 'ㄳ', 'ㄴㅈ': 'ㄵ', 'ㄴㅎ': 'ㄶ', 'ㄹㄱ': 'ㄺ', 'ㄹㅁ': 'ㄻ', 'ㄹㅂ': 'ㄼ', 'ㄹㅅ': 'ㄽ', 'ㄹㅌ': 'ㄾ', 'ㄹㅍ': 'ㄿ', 'ㄹㅎ': 'ㅀ', 'ㅂㅅ': 'ㅄ' };
const C2R = Object.fromEntries(Object.entries(C2).map(([k, v]) => [v, k]));
const isC = c => CHO.includes(c) || c in C2R;
const isV = c => JUNG.includes(c);

function compose(seq) {
  let out = '', cho = null, jung = null, jong = null;
  const flush = () => {
    if (cho && jung) out += String.fromCharCode(0xAC00 + (CHO.indexOf(cho) * 21 + JUNG.indexOf(jung)) * 28 + JONG.indexOf(jong || ''));
    else out += (cho || '') + (jung || '');
    cho = jung = jong = null;
  };
  for (const ch of seq) {
    if (isC(ch)) {
      if (cho && jung && !jong && JONG.includes(ch)) jong = ch;
      else if (cho && jung && jong && C2[jong + ch]) jong = C2[jong + ch];
      else { flush(); cho = ch; }
    } else if (isV(ch)) {
      if (cho && !jung) jung = ch;
      else if (jung && !jong && V2[jung + ch]) jung = V2[jung + ch];
      else if (cho && jung && jong) {
        let move;
        if (C2R[jong]) { move = C2R[jong][1]; jong = C2R[jong][0]; } else { move = jong; jong = null; }
        flush(); cho = move; jung = ch;
      } else { flush(); jung = ch; }
    } else { flush(); out += ch; }
  }
  flush();
  return out;
}

/* =========================================================
 *  입력 필드
 * ========================================================= */
const inputs = [];
function makeField(phKey, max, opts = {}) {
  const el = document.createElement('div');
  el.className = 'field focus';
  const f = {
    el, seq: [], max,
    value() { return compose(this.seq); },
    render() {
      const v = this.value();
      el.classList.toggle('has-ph', !v);
      el.innerHTML = v ? esc(v) : `<span class="ph">${esc(t(phKey))}</span>`;
      opts.onChange && opts.onChange(v);
    },
    push(ch) { if (this.value().length >= this.max && !(isV(ch) || isC(ch))) return; this.seq.push(ch); if (this.value().length > this.max) this.seq.pop(); this.render(); },
    pop() { this.seq.pop(); this.render(); },
    clear() { this.seq = []; this.render(); },
  };
  inputs.push(f);
  return f;
}

/* =========================================================
 *  가상 키보드
 * ========================================================= */
const ICON = {
  bs: '<svg viewBox="0 0 34 34"><path d="M27 17H8M15 9.5 7.5 17l7.5 7.5" fill="none" stroke="#292d2c" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  tab: '<svg viewBox="0 0 34 34"><path d="M5 17h19M18 11l6 6-6 6M28 10v14" fill="none" stroke="#292d2c" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  enter: '<svg viewBox="0 0 34 34"><path d="M27 9v9H8M14 12l-6 6 6 6" fill="none" stroke="#292d2c" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  shift: '<svg viewBox="0 0 34 34"><path d="M17 6 6 17h6v10h10V17h6z" fill="none" stroke="#292d2c" stroke-width="2.2" stroke-linejoin="round"/></svg>',
  space: '<svg viewBox="0 0 34 34"><path d="M8 15v6h18v-6" fill="none" stroke="#292d2c" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};
const NUMROW = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];
const NUMROW_S = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
const EN = ['qwertyuiop[]\\', "asdfghjkl;'", 'zxcvbnm,./'];
const EN_S = ['QWERTYUIOP{}|', 'ASDFGHJKL:"', 'ZXCVBNM<>?'];
const KO = ['ㅂㅈㄷㄱㅅㅛㅕㅑㅐㅔ[]\\', "ㅁㄴㅇㄹㅎㅗㅓㅏㅣ;'", 'ㅋㅌㅊㅍㅠㅜㅡ,./'];
const KO_S = ['ㅃㅉㄸㄲㅆㅛㅕㅑㅒㅖ{}|', 'ㅁㄴㅇㄹㅎㅗㅓㅏㅣ:"', 'ㅋㅌㅊㅍㅠㅜㅡ<>?'];
const CODE_ROWS = [
  ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'],
  ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote'],
  ['KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash'],
];
const CODE_NUM = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal'];

const keyboards = [];
function makeKeyboard(field, defaultLang, onEnter) {
  const wrap = document.createDocumentFragment();
  const langs = document.createElement('div');
  langs.className = 'kb-langs';
  [['ko', '한국어', 3], ['en', 'ENG', 96], ['ja', '日本語', 190], ['zh', '中文', 283]].forEach(([k, label, x]) => {
    const b = document.createElement('button');
    b.dataset.kl = k; b.textContent = label; b.style.left = x + 'px';
    langs.appendChild(b);
  });
  const kb = document.createElement('div');
  kb.className = 'kb';
  wrap.append(langs, kb);

  const st = { lang: defaultLang, shift: false, caps: false };
  const press = (k) => {
    if (k === 'bs') field.pop();
    else if (k === 'enter') onEnter();
    else if (k === 'tab') { /* no-op */ }
    else if (k === 'shift') { st.shift = !st.shift; draw(); return; }
    else if (k === 'caps') { st.caps = !st.caps; draw(); return; }
    else if (k === 'space') field.push(' ');
    else if (k === '.com') '.com'.split('').forEach(c => field.push(c));
    else field.push(k);
    if (st.shift) { st.shift = false; draw(); }
  };
  function charsFor(row) {
    const ko = st.lang === 'ko';
    const shifted = st.shift;
    const upper = st.shift !== st.caps;
    if (ko) return [...(shifted ? KO_S : KO)[row]];
    const base = [...EN[row]], sh = [...EN_S[row]];
    return base.map((c, i) => /[a-z]/.test(c) ? (upper ? sh[i] : c) : (shifted ? sh[i] : c));
  }
  function draw() {
    $$('button', langs).forEach(b => b.classList.toggle('on', b.dataset.kl === st.lang));
    const num = st.shift ? NUMROW_S : NUMROW;
    const rows = [
      [...num.map(c => [c]), ['bs', ICON.bs, 'w-bs']],
      [['tab', ICON.tab, 'w-tab'], ...charsFor(0).map(c => [c])],
      [['caps', 'caps', 'w-caps' + (st.caps ? ' latched' : '')], ...charsFor(1).map(c => [c]), ['enter', ICON.enter, 'w-enter']],
      [['shift', ICON.shift, 'w-shift' + (st.shift ? ' latched' : '')], ...charsFor(2).map(c => [c]), ['shift', ICON.shift, 'w-shift' + (st.shift ? ' latched' : '')]],
      [['.com', '.com', 'w-com'], ['@', '@', 'w-at'], ['space', ICON.space, 'w-space']],
    ];
    kb.innerHTML = rows.map(r => `<div class="kb-row">${r.map(([k, html, cls]) =>
      `<button data-k="${esc(k)}" class="${cls || ''}">${html ?? esc(k)}</button>`).join('')}</div>`).join('');
  }
  kb.addEventListener('pointerdown', e => {
    const b = e.target.closest('button'); if (!b) return;
    e.preventDefault(); press(b.dataset.k);
  });
  langs.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    st.lang = b.dataset.kl; st.shift = false; draw();
  });
  draw();
  const api = {
    st, draw, press,
    physical(e) {
      if (e.code === 'Backspace') return press('bs');
      if (e.code === 'Enter' || e.code === 'NumpadEnter') return press('enter');
      if (e.code === 'Space') return press('space');
      if (e.code === 'CapsLock') return press('caps');
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const sh = e.shiftKey;
      const ni = CODE_NUM.indexOf(e.code);
      if (ni >= 0) return field.push((sh ? NUMROW_S : NUMROW)[ni]);
      for (let r = 0; r < 3; r++) {
        const i = CODE_ROWS[r].indexOf(e.code);
        if (i < 0) continue;
        if (st.lang === 'ko') return field.push((sh ? KO_S : KO)[r][i]);
        const up = sh !== st.caps;
        const c = EN[r][i];
        return field.push(/[a-z]/.test(c) ? (up ? EN_S[r][i] : c) : (sh ? EN_S[r][i] : c));
      }
    },
  };
  keyboards.push(api);
  return { node: wrap, api };
}

/* =========================================================
 *  숫자 키패드
 * ========================================================= */
function makeKeypad(field) {
  const kp = document.createElement('div');
  kp.className = 'keypad';
  const keys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', 'clear', '0', 'del'];
  kp.innerHTML = keys.map(k => k === 'clear' ? `<button class="small" data-k="clear">${esc(t('key.clear'))}</button>`
    : k === 'del' ? `<button class="del" data-k="del"><svg viewBox="0 0 26 16"><path d="M24 8H3M9 2 3 8l6 6" fill="none" stroke="#292d2c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><span>${esc(t('key.del'))}</span></button>`
    : `<button data-k="${k}">${k}</button>`).join('');
  kp.addEventListener('pointerdown', e => {
    const b = e.target.closest('button'); if (!b) return;
    e.preventDefault();
    const k = b.dataset.k;
    if (k === 'clear') field.clear(); else if (k === 'del') field.pop(); else field.push(k);
  });
  return kp;
}

/* =========================================================
 *  조회 패널 구성
 * ========================================================= */
function desc(key) { const d = document.createElement('div'); d.className = 'desc'; d.dataset.k = key; d.textContent = t(key); return d; }

function buildNamePane(pane, kbLang, onSubmit, submitBtn) {
  const field = makeField('ph.name', 20, { onChange: v => { submitBtn.disabled = !v.trim(); } });
  const { node, api } = makeKeyboard(field, kbLang, () => { if (field.value().trim()) onSubmit(); });
  pane.append(desc('desc.name'), field.el, node);
  return { field, kb: api };
}
function buildNumberPane(pane, onSubmit, submitBtn) {
  const field = makeField('ph.number', 4, { onChange: v => { submitBtn.disabled = v.length !== 4; } });
  pane.append(desc('desc.number'), field.el, makeKeypad(field));
  return { field };
}
function buildQrPane(pane, onScan) {
  const g = document.createElement('div');
  g.className = 'qr-guide';
  g.innerHTML = '<img src="assets/qr-guide.png" alt="">';
  g.addEventListener('click', () => {
    if (g.classList.contains('scanning')) return;
    g.classList.add('scanning');
    later(() => { g.classList.remove('scanning'); onScan(); }, 1200);
  });
  pane.append(desc('desc.qr'), g);
  return { guide: g };
}

/* --- 체크인: 탭 조회 화면 --- */
const L = {};
{
  const scr = $('#s-lookup');
  const submit = $('.submit', scr);
  L.name = buildNamePane($('[data-pane=name]', scr), 'en', () => submit.click(), submit);
  L.number = buildNumberPane($('[data-pane=number]', scr), () => submit.click(), submit);
  L.qr = buildQrPane($('[data-pane=qr]', scr), () => found([RESERVATIONS[0]], 'qr', ''));
  const tabs = $('#lookup-tabs');
  const setTab = (tab) => {
    S.tab = tab;
    tabs.dataset.tab = tab;
    $$('button', tabs).forEach(b => b.classList.toggle('on', b.dataset.tab === tab));
    $$('.pane', scr).forEach(p => { p.hidden = p.dataset.pane !== tab; });
    submit.hidden = tab === 'qr';
    (tab === 'name' ? L.name.field : L.number.field).render();
  };
  L.setTab = setTab;
  $$('button', tabs).forEach(b => b.addEventListener('click', () => setTab(b.dataset.tab)));
  submit.addEventListener('click', () => {
    if (S.tab === 'name') searchName(L.name.field.value());
    else searchNumber(L.number.field.value());
  });
}
/* --- 객실 번호 확인: 예약자명 단독 --- */
{
  const scr = $('#s-name');
  const submit = $('.submit', scr);
  L.solo = buildNamePane($('.pane', scr), 'ko', () => submit.click(), submit);
  submit.addEventListener('click', () => searchName(L.solo.field.value()));
}
/* --- 체크아웃: 예약번호 단독 --- */
{
  const scr = $('#s-number');
  const submit = $('.submit', scr);
  L.soloNum = buildNumberPane($('.pane', scr), () => submit.click(), submit);
  submit.addEventListener('click', () => searchNumber(L.soloNum.field.value()));
}

const norm = s => s.toLowerCase().replace(/\s+/g, '');
function searchName(q) {
  const n = norm(q);
  const demo = n === 'test' || n === '테스트';   // 데모용: 복수 예약 화면 확인
  const m = RESERVATIONS.filter(r => demo || norm(r.name).includes(n));
  found(m, 'name', q);
}
function searchNumber(q) {
  found(RESERVATIONS.filter(r => r.no === q), 'number', q);
}
function found(list, method, q) {
  if (!list.length) return openError(method, q);
  S.matches = list;
  S.selected = list.length === 1 ? 0 : -1;
  go('list');
  if (list.length === 1) openConfirm();
}

/* 물리 키보드 입력 */
addEventListener('keydown', e => {
  if (e.repeat && e.code !== 'Backspace') return;
  if ($('#overlay').classList.contains('show')) {
    if (e.code === 'Escape') $('#m-cancel').click();
    if (e.code === 'Enter') $('#m-ok').click();
    return;
  }
  if (S.screen === 'lookup' && S.tab === 'name') { L.lookupKb.physical(e); e.preventDefault(); }
  else if (S.screen === 'name') { L.solo.kb.physical(e); e.preventDefault(); }
  else if ((S.screen === 'lookup' && S.tab === 'number') || S.screen === 'number') {
    const f = S.screen === 'number' ? L.soloNum.field : L.number.field;
    if (/^Digit\d$|^Numpad\d$/.test(e.code)) f.push(e.code.slice(-1));
    else if (e.code === 'Backspace') f.pop();
    else if (e.code === 'Enter') $('.submit', $('.screen.active')).click();
  }
});
L.lookupKb = L.name.kb;
L.setTab('name');

/* =========================================================
 *  예약 목록
 * ========================================================= */
const listScroll = $('#list-scroll');
const thumb = $('#list-bar i');
function updateBar() {
  const h = listScroll.clientHeight, sh = listScroll.scrollHeight;
  const track = 1448;
  if (sh <= h + 1) { thumb.style.display = 'none'; return; }
  thumb.style.display = '';
  const th = Math.max(120, track * (h / sh));
  thumb.style.height = th + 'px';
  thumb.style.top = ((track - th) * listScroll.scrollTop / (sh - h)) + 'px';
}
listScroll.addEventListener('scroll', updateBar);

function renderList() {
  const multi = S.matches.length > 1;
  $('#list-sub').style.visibility = multi ? '' : 'hidden';
  $('#cards').innerHTML = S.matches.map((r, i) => `
    <div class="rcard${i === S.selected ? ' on' : ''}" data-i="${i}">
      <div class="t lbl" style="left:40px;top:50px;font-size:23px">${esc(t('card.name'))}</div>
      <div class="t" style="left:139px;top:46px;font-size:37px;font-weight:600">${esc(r.name)}</div>
      <button class="sel">${esc(t(i === S.selected ? 'btn.next' : 'btn.select'))}</button>
      <div class="hr"></div>
      <div class="t lbl" style="left:40px;top:174px;font-size:23px">${esc(t('card.in'))}</div>
      <div class="t b" style="left:206px;top:174px;font-size:23px">${esc(fmtLong(r.in))}</div>
      <div class="t lbl" style="left:475px;top:174px;font-size:23px">${esc(t('card.out'))}</div>
      <div class="t b" style="right:37px;top:174px;font-size:23px">${esc(fmtLong(r.out))}</div>
      <img src="assets/bed.png" alt="">
      ${[...r.rooms.map(x => [t('room.no', { n: x.room }), t('room.line', { type: roomType(x.type), n: x.adults })]),
        [t('card.platform'), r.platform], [t('card.no'), r.no], [t('card.summary'), t('res.summary', { r: r.rooms.length, n: r.total })]]
        .map(([k, v], j) => `<div class="t" style="left:480px;top:${236 + j * 44}px;font-size:23px">${esc(k)}</div>
        <div class="t" style="right:41px;top:${236 + j * 44}px;font-size:23px">${esc(v)}</div>`).join('')}
    </div>`).join('');
  requestAnimationFrame(updateBar);
}
$('#cards').addEventListener('click', e => {
  const card = e.target.closest('.rcard'); if (!card) return;
  const i = +card.dataset.i;
  const wasSel = S.selected === i;
  const onBtn = !!e.target.closest('.sel');
  S.selected = i;
  renderList();
  if (wasSel && onBtn) openConfirm();
});

/* =========================================================
 *  모달
 * ========================================================= */
const overlay = $('#overlay');
let modalOk = null;
function openModal({ title, rows, w1, w2, w3, onOk }) {
  $('#m-title').textContent = title;
  $('#m-box').innerHTML = rows.map(([k, v], i) =>
    `<div class="row" style="top:${43 + i * 63}px"><span>${esc(k)}</span><span>${esc(v)}</span></div>`).join('');
  $('#m-w1').textContent = w1; $('#m-w2').textContent = w2; $('#m-w3').textContent = w3;
  modalOk = onOk;
  overlay.classList.add('show');
}
function closeModal() { overlay.classList.remove('show'); modalOk = null; }
$('#m-cancel').addEventListener('click', closeModal);
$('#m-ok').addEventListener('click', () => { const f = modalOk; closeModal(); f && f(); });

function openConfirm() {
  const r = S.matches[S.selected]; if (!r) return;
  S.res = r;
  if (S.flow === 'checkout') {
    return openModal({
      title: t('co.title'),
      rows: [[t('card.name'), r.name], [t('card.room'), roomNos(r)], [t('card.in'), fmtLong(r.in)], [t('card.out'), fmtLong(r.out)]],
      w1: t('co.w1'), w2: t('co.w2'), w3: t('co.w3'),
      onOk: () => go('done'),
    });
  }
  if (S.flow === 'roomcheck') {
    return openModal({
      title: t('rc.title'),
      rows: [[t('card.name'), r.name], [t('card.room'), roomNos(r)], [t('card.in'), fmtLong(r.in)], [t('card.out'), fmtLong(r.out)]],
      w1: t('rc.w1'), w2: t('rc.w2'), w3: t('rc.w3'),
      onOk: goHome,
    });
  }
  openModal({
    title: t('modal.title'),
    rows: [[t('card.name'), r.name], [t('card.room'), `${roomNos(r)} (${t('res.summary', { r: r.rooms.length, n: r.total })})`], [t('card.in'), fmtLong(r.in)], [t('card.out'), fmtLong(r.out)]],
    w1: t('modal.w1'), w2: t('modal.w2'), w3: t('modal.w3'),
    onOk: () => go('guests'),
  });
}
function openError(method, q) {
  openModal({
    title: t('err.title'),
    rows: [[t('err.method'), t(method === 'name' ? 'tab.name' : 'tab.number')], [t('err.input'), q || '-'], [t('err.result'), t('err.none')]],
    w1: t('err.w1'), w2: t('err.w2'), w3: t('err.w3'),
    onOk: null,
  });
}

/* =========================================================
 *  인원 / 성인 인증 / 키 발급
 * ========================================================= */
function renderGuests() {
  const max = S.res ? S.res.total : 3;
  S.guests = Math.min(Math.max(1, S.guests), max);
  $('#guests-max').textContent = t('guests.max', { n: max });
  $('#g-count').textContent = S.guests;
  $('#g-minus').disabled = S.guests <= 1;
  $('#g-plus').disabled = S.guests >= max;
}
$('#g-minus').addEventListener('click', () => { S.guests--; renderGuests(); });
$('#g-plus').addEventListener('click', () => { S.guests++; renderGuests(); });
$('#g-next').addEventListener('click', () => { S.guestIdx = 1; go('idprep'); });

function renderIdPerson() { $('#idp-progress').textContent = t('id.progress', { n: S.guests, i: S.guestIdx }); }
$('#idp-next').addEventListener('click', () => go('idok'));
// 신분증 그림 터치 = 인식 실패 시나리오 (1번째 투숙객: 성인 인증 필요 / 2번째부터: 이미 확인된 신분증)
$('#idp-image').addEventListener('click', () => {
  go('idfail', { push: false });
  if (S.guestIdx > 1) openPm('dup');
});
$('#fail-cancel').addEventListener('click', () => openPm('stop'));
$('#fail-staff').addEventListener('click', () => {
  openPm('staff');
  pmLater(() => {
    openPm('staffdone');
    let left = 180;
    const show = () => { $('#pm-timer').textContent = `${pad(Math.floor(left / 60))} : ${pad(left % 60)}`; };
    show();
    const id = setInterval(() => { left = Math.max(0, left - 1); show(); }, 1000);
    S.pmTimers.push(id);
    pmLater(() => { closePm(); go('idok', { push: false }); }, 3000);
  }, 4000);
});

/* 성인 인증 팝업 */
S.pmTimers = [];
const pmOverlay = $('#pm-overlay');
const pmLater = (fn, ms) => { S.pmTimers.push(setTimeout(fn, ms)); };
function openPm(name) {
  $$('.pm', pmOverlay).forEach(el => el.classList.toggle('on', el.id === 'pm-' + name));
  pmOverlay.classList.add('show');
}
function closePm() {
  S.pmTimers.forEach(id => { clearTimeout(id); clearInterval(id); });
  S.pmTimers = [];
  pmOverlay.classList.remove('show');
}
pmOverlay.addEventListener('click', e => {
  const b = e.target.closest('[data-pm]'); if (!b) return;
  const a = b.dataset.pm;
  if (a === 'close') closePm();
  else if (a === 'start') { closePm(); goStart(); }
  else if (a === 'stop') { closePm(); openPm('stop'); }
  else if (a === 'retry') { closePm(); go('idperson', { push: false }); }
});

function renderIdOk() {
  const pct = Math.round(S.guestIdx / S.guests * 100);
  $('#ok-progress').textContent = t('ok.progress', { n: S.guests, i: S.guestIdx });
  $('#ok-pct').textContent = `${pct} / 100(%)`;
  const bar = $('#ok-bar');
  bar.style.transition = 'none';
  bar.style.width = Math.round((S.guestIdx - 1) / S.guests * 100) + '%';
  requestAnimationFrame(() => requestAnimationFrame(() => { bar.style.transition = ''; bar.style.width = pct + '%'; }));
}
$('#ok-next').addEventListener('click', () => {
  if (S.guestIdx < S.guests) { S.guestIdx++; go('idperson', { push: false }); }
  else go('issuing', { push: false });
});

function roomCard(el, r, photo) {
  const inT = S.flow === 'walkin' ? new Date() : r.in;
  el.innerHTML = `
    <div class="t b" style="left:42px;top:42px;font-size:36px;color:#292a28">${esc(t('room.title', { r: r.rooms.length, n: r.total }))}</div>
    <div class="t" style="left:42px;top:82px;font-size:24px;color:#8f918e">${esc(r.rooms.map(x => `${t('room.no', { n: x.room })} ${roomType(x.type)}`).join(' / '))}</div>
    <div class="hr"></div>
    <div class="t" style="left:42px;top:170px;font-size:25px;color:#747870">${esc(t('card.in'))} ${esc(fmtShort(inT))}</div>
    <div class="vr"></div>
    <div class="t" style="left:512px;top:170px;font-size:25px;color:#747870">${esc(t('card.out'))} ${esc(fmtShort(r.out))}</div>
    <img src="assets/${photo ? 'room-photo' : 'bed-key'}.png" alt="">
    <div class="t" style="left:506px;top:292px;font-size:24px;color:#292a28">${esc(t('room.amen'))}</div>`;
}

function renderDone() {
  const r = S.res;
  const co = S.flow === 'checkout';
  $('#done-room').textContent = r.rooms.map(x => x.room).join(' · ');
  $('#done-title').textContent = t(co ? 'done.coTitle' : 'done.title');
  $('#done-again').textContent = t(co ? 'btn.againCo' : 'btn.again');
  roomCard($('#done-card'), r, true);
}
$('#done-again').addEventListener('click', () => {
  S.history = ['main'];
  resetLookup();
  if (S.flow === 'checkout') go('number', { push: false });
  else if (S.flow === 'walkin') goHome();
  else go('lookup', { push: false });
});

/* =========================================================
 *  화면 진입 시 처리
 * ========================================================= */
function resetLookup() {
  [L.name.field, L.number.field, L.solo.field, L.soloNum.field].forEach(f => f.clear());
  L.setTab('name');
}
const REFRESH = {
  list: renderList,
  guests: renderGuests,
  idperson: renderIdPerson,
  idok: renderIdOk,
  issuing: () => roomCard($('#issue-card'), S.res, false),
  done: renderDone,
};
const ENTER = {
  lang: () => { $$('.lang-opt').forEach(b => b.classList.toggle('on', b.dataset.lang === S.lang)); },
  main: () => { resetLookup(); S.res = null; },
  lookup: () => {},
  name: () => {},
  number: () => {},
  list: () => { listScroll.scrollTop = 0; renderList(); },
  guests: () => { if (S.history[S.history.length - 1] !== 'guests') S.guests = S.res ? S.res.total : 2; renderGuests(); },
  idprep: () => {},
  idperson: renderIdPerson,
  idok: renderIdOk,
  issuing: () => {
    REFRESH.issuing();
    later(() => go('done', { push: false }), 3600);
  },
  done: () => {
    S.history = [];
    renderDone();
    let n = 25;
    $('#done-count').textContent = n;
    const id = setInterval(() => {
      n--;
      $('#done-count').textContent = n;
      if (n <= 0) goStart();
    }, 1000);
    S.timers.push(id);
  },
};

/* =========================================================
 *  시작
 * ========================================================= */
applyLang();
const params = new URLSearchParams(location.search);
const startAt = params.get('screen');
if (startAt && CHROME[startAt]) {
  if (!S.res) S.res = RESERVATIONS[0];
  if (startAt === 'list') { S.matches = RESERVATIONS.slice(); S.selected = -1; }
  go(startAt, { push: false });
} else go('lang', { push: false });

window.__kiosk = { S, go, setLang, openConfirm, L, RESERVATIONS };
})();
