// eval('var '+ "msg"+'="123";');
// let str ='';
//
// let c=`${msg=="重要"}`
// console.log(222,c)
// if(c=='false'){
// console.log(111)
// }
// console.log(Math.random().toString(36).substr(2,7));
// let a=111;
// console.log(a.toString(36))
let asb = [{
  id: 91,
  act_type: 'StartEvent',
  act_name: '启动审批',
  proc_element_id: 'StartEvent_009g1m4',
  condition: '',
  assignee: '',
  candidate_users: '',
  candidate_group: '',
  proc_def_id: 'caseProcess:5:100',
  source_ref: '',
  target_ref: '',
  form: ''
},
  {
    id: 92,
    act_type: 'SequenceFlow',
    act_name: '',
    proc_element_id: 'SequenceFlow_0v5zk6r',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:5:100',
    source_ref: 'StartEvent_009g1m4',
    target_ref: 'Task_1x4awke',
    form: ''
  },

  {
    id: 93,
    act_type: 'UserTask',
    act_name: '审核',
    proc_element_id: 'Task_1x4awke',
    condition: '',
    assignee: '"000000"',
    candidate_users: '["0022","1234567"]',
    candidate_group: '["523d8eb0-f697-11e7-975a-07396c7a8b4c","7ccabe10-3a17-11e7-b6fc-bbe623bbcad0"]',
    proc_def_id: 'caseProcess:5:100',
    source_ref: '',
    target_ref: '',
    form: 'oa_case'
  },

  {
    id: 94,
    act_type: 'ExclusiveGateway',
    act_name: '',
    proc_element_id: 'ExclusiveGateway_0wytdv5',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:5:100',
    source_ref: '',
    target_ref: '',
    form: ''
  },
  {
    id: 95,
    act_type: 'SequenceFlow',
    act_name: '',
    proc_element_id: 'SequenceFlow_01cqeaa',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:5:100',
    source_ref: 'Task_1x4awke',
    target_ref: 'ExclusiveGateway_0wytdv5',
    form: ''
  },
  {
    id: 96,
    act_type: 'EndEvent',
    act_name: '结束审批',
    proc_element_id: 'EndEvent_0yodd9j',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:5:100',
    source_ref: '',
    target_ref: '',
    form: ''
  },

  {
    id: 97,
    act_type: 'SequenceFlow',
    act_name: '同意',
    proc_element_id: 'SequenceFlow_1c1hd64',
    condition: 'true',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:5:100',
    source_ref: 'ExclusiveGateway_0wytdv5',
    target_ref: 'EndEvent_0yodd9j',
    form: ''
  },

  {
    id: 98,
    act_type: 'SequenceFlow',
    act_name: '驳回',
    proc_element_id: 'SequenceFlow_1vyaoov',
    condition: 'false',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:5:100',
    source_ref: 'ExclusiveGateway_0wytdv5',
    target_ref: 'Task_1x4awke',
    form: ''
  },
]

let arr1 = [
  {
    id: 152,
    act_type: 'StartEvent',
    act_name: '',
    proc_element_id: 'StartEvent_0qcv64b',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:7:100',
    source_ref: '',
    target_ref: '',
    form: ''
  },
  {
    id: 153,
    act_type: 'SequenceFlow',
    act_name: '',
    proc_element_id: 'SequenceFlow_13uogi8',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:7:100',
    source_ref: 'StartEvent_0qcv64b',
    target_ref: 'Task_1f9j3zm',
    form: ''
  },
  {
    id: 154,
    act_type: 'UserTask',
    act_name: '',
    proc_element_id: 'Task_1f9j3zm',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:7:100',
    source_ref: '',
    target_ref: '',
    form: ''
  },


  {
    id: 155,
    act_type: 'SequenceFlow',
    act_name: '',
    proc_element_id: 'SequenceFlow_1xkcw8j',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:7:100',
    source_ref: 'Task_1f9j3zm',
    target_ref: 'Task_0rcnqln',
    form: ''
  },

  {
    id: 156,
    act_type: 'ExclusiveGateway',
    act_name: '',
    proc_element_id: 'ExclusiveGateway_1dl95ex',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:7:100',
    source_ref: '',
    target_ref: '',
    form: ''
  },

  {
    id: 157,
    act_type: 'SequenceFlow',
    act_name: '',
    proc_element_id: 'SequenceFlow_0qjhzud',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:7:100',
    source_ref: 'Task_0rcnqln',
    target_ref: 'ExclusiveGateway_1dl95ex',
    form: ''
  },

  {
    id: 158,
    act_type: 'UserTask',
    act_name: '',
    proc_element_id: 'Task_0rcnqln',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:7:100',
    source_ref: '',
    target_ref: '',
    form: ''
  },

  {
    id: 159,
    act_type: 'EndEvent',
    act_name: '',
    proc_element_id: 'EndEvent_1ra88uq',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:7:100',
    source_ref: '',
    target_ref: '',
    form: ''
  },

  {
    id: 160,
    act_type: 'SequenceFlow',
    act_name: '',
    proc_element_id: 'SequenceFlow_1l7lix1',
    condition: 'false',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:7:100',
    source_ref: 'ExclusiveGateway_1dl95ex',
    target_ref: 'EndEvent_1ra88uq',
    form: ''
  },

  {
    id: 161,
    act_type: 'SequenceFlow',
    act_name: '同意',
    proc_element_id: 'SequenceFlow_05dh2eb',
    condition: 'true',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:7:100',
    source_ref: 'ExclusiveGateway_1dl95ex',
    target_ref: 'Task_0wblxk6',
    form: ''
  },

  {
    id: 162,
    act_type: 'UserTask',
    act_name: '',
    proc_element_id: 'Task_0wblxk6',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:7:100',
    source_ref: '',
    target_ref: '',
    form: ''
  },

  {
    id: 163,
    act_type: 'SequenceFlow',
    act_name: '同意',
    proc_element_id: 'SequenceFlow_1d8t89z',
    condition: 'true',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess:7:100',
    source_ref: 'Task_0wblxk6',
    target_ref: 'EndEvent_1ra88uq',
    form: ''
  }
]

let arr = [
  {
    id: 99,
    act_type: 'StartEvent',
    act_name: '',
    proc_element_id: 'StartEvent_1kw6wmo',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'Process_mdb3oa7:1:101',
    source_ref: '',
    target_ref: '',
    form: ''
  },
  {
    id: 100,
    act_type: 'SequenceFlow',
    act_name: '',
    proc_element_id: 'SequenceFlow_0b4mcd8',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'Process_mdb3oa7:1:101',
    source_ref: 'StartEvent_1kw6wmo',
    target_ref: 'ExclusiveGateway_0hjiejw',
    form: ''
  },
  {
    id: 101,
    act_type: 'ParallelGateway',
    act_name: '',
    proc_element_id: 'ExclusiveGateway_0hjiejw',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'Process_mdb3oa7:1:101',
    source_ref: '',
    target_ref: '',
    form: ''
  },
  {
    id: 102,
    act_type: 'SequenceFlow',
    act_name: '',
    proc_element_id: 'SequenceFlow_1dspqvf',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'Process_mdb3oa7:1:101',
    source_ref: 'ExclusiveGateway_0hjiejw',
    target_ref: 'Task_0zgi20m',
    form: ''
  },

  {
    id: 103,
    act_type: 'SequenceFlow',
    act_name: '',
    proc_element_id: 'SequenceFlow_15c0f2q',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'Process_mdb3oa7:1:101',
    source_ref: 'ExclusiveGateway_0hjiejw',
    target_ref: 'Task_1tgavgv',
    form: ''
  },

  {
    id: 104,
    act_type: 'SequenceFlow',
    act_name: '',
    proc_element_id: 'SequenceFlow_0k676cs',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'Process_mdb3oa7:1:101',
    source_ref: 'ExclusiveGateway_0hjiejw',
    target_ref: 'Task_1bljeog',
    form: ''
  },

  {
    id: 105,
    act_type: 'UserTask',
    act_name: '',
    proc_element_id: 'Task_1bljeog',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'Process_mdb3oa7:1:101',
    source_ref: '',
    target_ref: '',
    form: ''
  },

  {
    id: 106,
    act_type: 'UserTask',
    act_name: '',
    proc_element_id: 'Task_1tgavgv',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'Process_mdb3oa7:1:101',
    source_ref: '',
    target_ref: '',
    form: ''
  },

  {
    id: 107,
    act_type: 'UserTask',
    act_name: '',
    proc_element_id: 'Task_0zgi20m',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'Process_mdb3oa7:1:101',
    source_ref: '',
    target_ref: '',
    form: ''
  },

  {
    id: 108,
    act_type: 'SequenceFlow',
    act_name: '',
    proc_element_id: 'SequenceFlow_0ixoabz',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'Process_mdb3oa7:1:101',
    source_ref: 'Task_1tgavgv',
    target_ref: 'ExclusiveGateway_1d62sld',
    form: ''
  },

  {
    id: 109,
    act_type: 'ParallelGateway',
    act_name: '',
    proc_element_id: 'ExclusiveGateway_1d62sld',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'Process_mdb3oa7:1:101',
    source_ref: '',
    target_ref: '',
    form: ''
  },

  {
    id: 110,
    act_type: 'SequenceFlow',
    act_name: '',
    proc_element_id: 'SequenceFlow_1l36ueb',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'Process_mdb3oa7:1:101',
    source_ref: 'Task_0zgi20m',
    target_ref: 'ExclusiveGateway_1d62sld',
    form: ''
  },

  {
    id: 111,
    act_type: 'SequenceFlow',
    act_name: '',
    proc_element_id: 'SequenceFlow_0qnr49f',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'Process_mdb3oa7:1:101',
    source_ref: 'Task_1bljeog',
    target_ref: 'ExclusiveGateway_1d62sld',
    form: ''
  },

  {
    id: 112,
    act_type: 'EndEvent',
    act_name: '',
    proc_element_id: 'EndEvent_1j5jyaw',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'Process_mdb3oa7:1:101',
    source_ref: '',
    target_ref: '',
    form: ''
  },

  {
    id: 113,
    act_type: 'SequenceFlow',
    act_name: '',
    proc_element_id: 'SequenceFlow_1dgpa9x',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'Process_mdb3oa7:1:101',
    source_ref: 'ExclusiveGateway_1d62sld',
    target_ref: 'EndEvent_1j5jyaw',
    form: ''
  },
];

let arr2 = [
  {
    id: 584,
    act_type: 'StartEvent',
    act_name: '开始审批',
    proc_element_id: 'StartEvent_12b7lgg',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess1:11:110',
    source_ref: '',
    target_ref: '',
    form: ''
  },
  {
    id: 585,
    act_type: 'SequenceFlow',
    act_name: '同意',
    proc_element_id: 'SequenceFlow_0pdf8aj',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess1:11:110',
    source_ref: 'StartEvent_12b7lgg',
    target_ref: 'Task_11sab81',
    form: ''
  },
  {
    id: 586,
    act_type: 'UserTask',
    act_name: '用户1审批',
    proc_element_id: 'Task_11sab81',
    condition: '',
    assignee: '"000000"',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess1:11:110',
    source_ref: '',
    target_ref: '',
    form: 'oa_case'
  },

  {
    id: 587,
    act_type: 'SequenceFlow',
    act_name: '同意',
    proc_element_id: 'SequenceFlow_1c1i4pl',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess1:11:110',
    source_ref: 'Task_11sab81',
    target_ref: 'Task_05hhe1u',
    form: ''
  },
  {
    id: 588,
    act_type: 'UserTask',
    act_name: '用户2',
    proc_element_id: 'Task_05hhe1u',
    condition: '',
    assignee: '',
    candidate_users: '["04a7cf60-e4a6-11e7-81e2-315e0fb62de4"]',
    candidate_group: '',
    proc_def_id: 'caseProcess1:11:110',
    source_ref: '',
    target_ref: '',
    form: 'oa111'
  },
  {
    id: 589,
    act_type: 'ExclusiveGateway',
    act_name: '',
    proc_element_id: 'ExclusiveGateway_08blpdk',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess1:11:110',
    source_ref: '',
    target_ref: '',
    form: ''
  },
  {
    id: 590,
    act_type: 'SequenceFlow',
    act_name: '同意',
    proc_element_id: 'SequenceFlow_159pxja',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess1:11:110',
    source_ref: 'Task_05hhe1u',
    target_ref: 'ExclusiveGateway_08blpdk',
    form: ''
  },
  {
    id: 591,
    act_type: 'SequenceFlow',
    act_name: '同意',
    proc_element_id: 'SequenceFlow_1j6dm3i',
    condition: 'true',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess1:11:110',
    source_ref: 'ExclusiveGateway_08blpdk',
    target_ref: 'Task_0wd7tx5',
    form: ''
  },
  {
    id: 592,
    act_type: 'UserTask',
    act_name: '用户3审核',
    proc_element_id: 'Task_0wd7tx5',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '["7ccabe10-3a17-11e7-b6fc-bbe623bbcad0"]',
    proc_def_id: 'caseProcess1:11:110',
    source_ref: '',
    target_ref: '',
    form: ''
  },
  {
    id: 593,
    act_type: 'EndEvent',
    act_name: '结束审批',
    proc_element_id: 'EndEvent_1czj0x7',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess1:11:110',
    source_ref: '',
    target_ref: '',
    form: ''
  },
  {
    id: 594,
    act_type: 'SequenceFlow',
    act_name: '同意',
    proc_element_id: 'SequenceFlow_1wkujn6',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess1:11:110',
    source_ref: 'Task_0wd7tx5',
    target_ref: 'EndEvent_1czj0x7',
    form: ''
  },
  {
    id: 595,
    act_type: 'SequenceFlow',
    act_name: '驳回',
    proc_element_id: 'SequenceFlow_0lz1q0z',
    condition: 'false',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'caseProcess1:11:110',
    source_ref: 'ExclusiveGateway_08blpdk',
    target_ref: 'EndEvent_1czj0x7',
    form: ''
  },
]
let arr3 = [{
  "id": 295,
  "act_type": "StartEvent",
  "act_name": "启动审批",
  "proc_element_id": "StartEvent_11fx726",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 296,
  "act_type": "UserTask",
  "act_name": "值班人员审核",
  "proc_element_id": "Task_0qkla2j",
  "condition": "",
  "assignee": "f7b9b600-6076-11e7-ba04-f3bc0839eb0c",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "",
  "target_ref": "",
  "form": "oa_case"
}, {
  "id": 297,
  "act_type": "ExclusiveGateway",
  "act_name": "",
  "proc_element_id": "ExclusiveGateway_0dgb596",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 298,
  "act_type": "SequenceFlow",
  "act_name": "同意",
  "proc_element_id": "SequenceFlow_1dvtqfa",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "Task_0qkla2j",
  "target_ref": "ExclusiveGateway_0dgb596",
  "form": ""
}, {
  "id": 299,
  "act_type": "SequenceFlow",
  "act_name": "通过",
  "proc_element_id": "SequenceFlow_17lye92",
  "condition": "true",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "ExclusiveGateway_0dgb596",
  "target_ref": "Task_0r2lhmi",
  "form": ""
}, {
  "id": 300,
  "act_type": "SequenceFlow",
  "act_name": "同意",
  "proc_element_id": "SequenceFlow_06hilzd",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "Task_0r2lhmi",
  "target_ref": "Task_0cw3ik9",
  "form": ""
}, {
  "id": 301,
  "act_type": "SequenceFlow",
  "act_name": "同意",
  "proc_element_id": "SequenceFlow_00ebkhk",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "ExclusiveGateway_1dcfgsf",
  "target_ref": "Task_028wwr6",
  "form": ""
}, {
  "id": 302,
  "act_type": "ParallelGateway",
  "act_name": "",
  "proc_element_id": "ExclusiveGateway_1dcfgsf",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 303,
  "act_type": "UserTask",
  "act_name": "核实人员上报现场情况",
  "proc_element_id": "Task_0r2lhmi",
  "condition": "",
  "assignee": "",
  "candidate_users": "[000000]",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 304,
  "act_type": "UserTask",
  "act_name": "值班长审核",
  "proc_element_id": "Task_0cw3ik9",
  "condition": "",
  "assignee": "f7b9b600-6076-11e7-ba04-f3bc0839eb0c",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 305,
  "act_type": "UserTask",
  "act_name": "部门领导审核",
  "proc_element_id": "Task_028wwr6",
  "condition": "",
  "assignee": "04a7cf60-e4a6-11e7-81e2-315e0fb62de4",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 306,
  "act_type": "SequenceFlow",
  "act_name": "同意",
  "proc_element_id": "SequenceFlow_0zpxfms",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "ExclusiveGateway_1dcfgsf",
  "target_ref": "Task_0m2wjsj",
  "form": ""
}, {
  "id": 307,
  "act_type": "UserTask",
  "act_name": "相关部门审核",
  "proc_element_id": "Task_0m2wjsj",
  "condition": "",
  "assignee": "000000",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 308,
  "act_type": "SequenceFlow",
  "act_name": "同意",
  "proc_element_id": "SequenceFlow_0mufstz",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "Task_0m2wjsj",
  "target_ref": "ExclusiveGateway_1pfp6ab",
  "form": ""
}, {
  "id": 309,
  "act_type": "ParallelGateway",
  "act_name": "",
  "proc_element_id": "ExclusiveGateway_1pfp6ab",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 310,
  "act_type": "SequenceFlow",
  "act_name": "同意",
  "proc_element_id": "SequenceFlow_1hrkd61",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "Task_028wwr6",
  "target_ref": "ExclusiveGateway_1pfp6ab",
  "form": ""
}, {
  "id": 311,
  "act_type": "EndEvent",
  "act_name": "结束审批",
  "proc_element_id": "EndEvent_1s4kq3p",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 312,
  "act_type": "SequenceFlow",
  "act_name": "同意",
  "proc_element_id": "SequenceFlow_0ed499f",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "ExclusiveGateway_1pfp6ab",
  "target_ref": "EndEvent_1s4kq3p",
  "form": ""
}, {
  "id": 313,
  "act_type": "ExclusiveGateway",
  "act_name": "",
  "proc_element_id": "ExclusiveGateway_1d3hik2",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 314,
  "act_type": "SequenceFlow",
  "act_name": "同意",
  "proc_element_id": "SequenceFlow_1gl5syy",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "Task_0cw3ik9",
  "target_ref": "ExclusiveGateway_1d3hik2",
  "form": ""
}, {
  "id": 315,
  "act_type": "SequenceFlow",
  "act_name": "通过",
  "proc_element_id": "SequenceFlow_0siayru",
  "condition": "true",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "ExclusiveGateway_1d3hik2",
  "target_ref": "ExclusiveGateway_1dcfgsf",
  "form": ""
}, {
  "id": 316,
  "act_type": "SequenceFlow",
  "act_name": "不通过",
  "proc_element_id": "SequenceFlow_0223niz",
  "condition": "false",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "ExclusiveGateway_0dgb596",
  "target_ref": "EndEvent_1s4kq3p",
  "form": ""
}, {
  "id": 317,
  "act_type": "SequenceFlow",
  "act_name": "不通过",
  "proc_element_id": "SequenceFlow_0oi72gg",
  "condition": "false",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "ExclusiveGateway_1d3hik2",
  "target_ref": "EndEvent_1s4kq3p",
  "form": ""
}, {
  "id": 318,
  "act_type": "SequenceFlow",
  "act_name": "同意",
  "proc_element_id": "SequenceFlow_1g5u6rc",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:1:108",
  "source_ref": "StartEvent_11fx726",
  "target_ref": "Task_0qkla2j",
  "form": ""
}]
let arr4 = [{
  "id": 295,
  "act_type": "UserTask",
  "act_name": "审核",
  "proc_element_id": "Task_1x4awke",
  "condition": "",
  "assignee": "\"04a7cf60-e4a6-11e7-81e2-315e0fb62de4\"",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 296,
  "act_type": "ExclusiveGateway",
  "act_name": "",
  "proc_element_id": "ExclusiveGateway_0wytdv5",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 297,
  "act_type": "SequenceFlow",
  "act_name": "同意",
  "proc_element_id": "SequenceFlow_01cqeaa",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "Task_1x4awke",
  "target_ref": "ExclusiveGateway_0wytdv5",
  "form": ""
}, {
  "id": 298,
  "act_type": "EndEvent",
  "act_name": "结束审批",
  "proc_element_id": "EndEvent_0yodd9j",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 299,
  "act_type": "SequenceFlow",
  "act_name": "同意",
  "proc_element_id": "SequenceFlow_1c1hd64",
  "condition": "true",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "ExclusiveGateway_0wytdv5",
  "target_ref": "EndEvent_0yodd9j",
  "form": ""
}, {
  "id": 300,
  "act_type": "StartEvent",
  "act_name": "开始审批",
  "proc_element_id": "StartEvent_0a79c72",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 301,
  "act_type": "SequenceFlow",
  "act_name": "同意",
  "proc_element_id": "SequenceFlow_1tvmwll",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "StartEvent_0a79c72",
  "target_ref": "Task_0iotvup",
  "form": ""
}, {
  "id": 302,
  "act_type": "UserTask",
  "act_name": "用户1",
  "proc_element_id": "Task_0iotvup",
  "condition": "",
  "assignee": "\"076bc6f0-f6a5-11e7-b57f-132671d63303\"",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "",
  "target_ref": "",
  "form": "oa_case"
}, {
  "id": 303,
  "act_type": "ExclusiveGateway",
  "act_name": "",
  "proc_element_id": "ExclusiveGateway_10twbya",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 304,
  "act_type": "SequenceFlow",
  "act_name": "同意",
  "proc_element_id": "SequenceFlow_0nck88l",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "Task_0iotvup",
  "target_ref": "ExclusiveGateway_10twbya",
  "form": ""
}, {
  "id": 305,
  "act_type": "SequenceFlow",
  "act_name": "同意",
  "proc_element_id": "SequenceFlow_1c93xxh",
  "condition": "true",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "ExclusiveGateway_10twbya",
  "target_ref": "Task_183xzyq",
  "form": ""
}, {
  "id": 306,
  "act_type": "UserTask",
  "act_name": "用户2",
  "proc_element_id": "Task_183xzyq",
  "condition": "",
  "assignee": "",
  "candidate_users": "[\"000000\"]",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 307,
  "act_type": "ExclusiveGateway",
  "act_name": "",
  "proc_element_id": "ExclusiveGateway_02ep5jt",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "",
  "target_ref": "",
  "form": ""
}, {
  "id": 308,
  "act_type": "SequenceFlow",
  "act_name": "同意",
  "proc_element_id": "SequenceFlow_02xve50",
  "condition": "",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "Task_183xzyq",
  "target_ref": "ExclusiveGateway_02ep5jt",
  "form": ""
}, {
  "id": 309,
  "act_type": "SequenceFlow",
  "act_name": "不同意",
  "proc_element_id": "SequenceFlow_0tudtwf",
  "condition": "false",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "ExclusiveGateway_10twbya",
  "target_ref": "EndEvent_0yodd9j",
  "form": ""
}, {
  "id": 310,
  "act_type": "SequenceFlow",
  "act_name": "同意",
  "proc_element_id": "SequenceFlow_12jp7xl",
  "condition": "true",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "ExclusiveGateway_02ep5jt",
  "target_ref": "Task_1x4awke",
  "form": ""
}, {
  "id": 311,
  "act_type": "SequenceFlow",
  "act_name": "驳回",
  "proc_element_id": "SequenceFlow_00vvif9",
  "condition": "false",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "ExclusiveGateway_02ep5jt",
  "target_ref": "EndEvent_0yodd9j",
  "form": ""
}, {
  "id": 312,
  "act_type": "SequenceFlow",
  "act_name": "驳回",
  "proc_element_id": "SequenceFlow_0jn09yf",
  "condition": "false",
  "assignee": "",
  "candidate_users": "",
  "candidate_group": "",
  "proc_def_id": "caseProcess:9:100",
  "source_ref": "ExclusiveGateway_0wytdv5",
  "target_ref": "EndEvent_0yodd9j",
  "form": ""
}]

function a() {
  let obj = {};
  let startId = ''
  let flow = [];
  let actArr = [];
  for (let i of arr3) {
    obj[i.proc_element_id] = i;
    if (i.act_type == 'StartEvent') {
      startId = i.proc_element_id;
      actArr = i
    } else if (i.act_type == 'SequenceFlow') {
      flow.push(i)
    }
  }

  let a = getActInstList("Task_028wwr6", flow, obj, {})
  let b = getActInstList1('SequenceFlow_1hrkd61', flow, obj, a)
  console.log()
  let actWaitArr = []
  actWaitArr.push(333)
  let procModelObj = b;
  let arrs = [];
  let ParallerFlowId;
  for (let i in procModelObj) {
    if (procModelObj[i].act_type == 'ParallelGateway') {
      ParallerFlowId = procModelObj[i].proc_element_id;
    }
  }
  for (let i in procModelObj) {
    let actinst = {
      // proc_def_id: proc.proc_def_id,
      // proc_inst_id: proc.proc_inst_id,
      act_name: procModelObj[i].act_name,
      act_type: procModelObj[i].act_type,
      proc_element_id: procModelObj[i].proc_element_id,
      start_time: new Date(),
      duration: 0
    };
    if (procModelObj[i].act_type == 'UserTask') {
      actinst.act_status = 0;
      actinst.assignee = procModelObj[i].assignee + procModelObj[i].candidate_users;
      actinst.group = procModelObj[i].candidate_group;
      arrs.push(actinst);
    } else if (procModelObj[i].act_type == 'EndEvent') {
      actinst.end_time = new Date();
      actinst.act_status = 1;
      if (actWaitArr.length == 0) {
        arrs.push(actinst);
      }
    } else {
      actinst.end_time = new Date();
      actinst.act_status = 1;
      if (actWaitArr.length == 0) {
        arrs.push(actinst);
      } else {
        if (procModelObj[i].act_type != 'SequenceFlow' && procModelObj[i].act_type != 'ParallelGateway') {
          arrs.push(actinst);
        } else if (procModelObj[i].act_type == 'SequenceFlow' && procModelObj[i].target_ref == ParallerFlowId) {
          arrs.push(actinst);
        }
      }
    }

  }
//console.log(arrs)
//   let c=getExecuteTaskInstList("Task_0qkla2j",flow,obj,{})
//   let f=getFlowTaskInstList('SequenceFlow_17lye92',flow,obj,c)
//
//    console.log(111,f)
}

//a();


function getActInstList(id, arr, obj, procObj) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].source_ref == id) {
      procObj[arr[i].proc_element_id] = obj[arr[i].proc_element_id];
      let type = obj[arr[i].target_ref].act_type;
      let item = obj[arr[i].target_ref];
      let index = obj[arr[i].target_ref].proc_element_id;
      if (type == 'UserTask') {
        procObj[index] = item;
        continue;
      } else if (type == 'ExclusiveGateway') {
        procObj[index] = item;
        continue;
      } else if (type == 'ParallelGateway') {
        procObj[index] = item;
        continue
      } else if (type == 'EndEvent') {
        procObj[index] = item;
        continue;
      }
      else {
        procObj[index] = item;
        getActInstList(arr[i].target_ref, arr, obj, procObj)
      }
    }
  }
  return procObj;
}

function getActInstList1(id, arr, obj, procObj) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].proc_element_id == id) {
      let type = obj[arr[i].target_ref].act_type
      procObj[arr[i].proc_element_id] = obj[arr[i].proc_element_id];
      let item = obj[arr[i].target_ref];
      let index = obj[arr[i].target_ref].proc_element_id;
      if (type == 'UserTask') {
        procObj[index] = item;
        continue;
      } else if (type == 'ExclusiveGateway') {
        procObj[index] = item;
        continue;
      } else if (type == 'EndEvent') {
        procObj[index] = item;
        continue
      } else {
        procObj[index] = item;
        getActInstList(arr[i].target_ref, arr, obj, procObj)
      }
    }
  }
  return procObj;
}

//得到userTask往下执行的flow
function getExecuteTaskInstList(id, arr, obj, procObj) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].source_ref == id) {
      let type = obj[arr[i].target_ref].act_type
      let item = obj[arr[i].target_ref];
      let index = obj[arr[i].target_ref].proc_element_id;
      if (type == 'UserTask') {
        procObj[index] = item;
        continue;
      }
      else if (type == 'ExclusiveGateway') {
        continue;
      } else if (type == 'EndEvent') {
        procObj[index] = item;
        continue;
      } else {
        procObj[index] = item;
        getExecuteTaskInstList(arr[i].target_ref, arr, obj, procObj)
      }
    } else if (arr[i].target_ref == id) {
      let type = obj[arr[i].target_ref].act_type;
      let item = obj[arr[i].target_ref];
      let index = obj[arr[i].target_ref].proc_element_id;
      if (type == 'EndEvent') {
        procObj[index] = item;
        break;
      }
    }
  }
  return procObj;
}

//得到往下执行的节点
function getFlowTaskInstList(id, arr, obj, procObj) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].proc_element_id == id) {
      let type = obj[arr[i].target_ref].act_type
      let item = obj[arr[i].target_ref];
      let index = obj[arr[i].target_ref].proc_element_id;
      if (type == 'UserTask') {
        procObj[index] = item;
        continue;
      }
      else if (type == 'ExclusiveGateway') {
        continue;
      } else if (type == 'EndEvent') {
        procObj[index] = item;
        continue;
      } else {
        procObj[index] = item;
        getExecuteTaskInstList(arr[i].target_ref, arr, obj, procObj)
      }
    } else if (arr[i].target_ref == id) {
      let type = obj[arr[i].target_ref].act_type
      let item = obj[arr[i].target_ref];
      let index = obj[arr[i].target_ref].proc_element_id;
      if (type == 'EndEvent') {
        procObj[index] = item;
        break;
      }
    }
  }
  return procObj;
}

// function  getExecuteTaskInstList(id,arr,obj,procArr){
// let status=1
//   for(let i=0;i<arr.length;i++){
//     if(arr[i].source_ref==id){
//       let type=obj[arr[i].target_ref].act_type
//       if(type=='UserTask'){
//         procArr.push(obj[arr[i].target_ref])
//         continue;
//       }
//       else if(type=='ExclusiveGateway'){
//         continue;
//       } else if(type=='EndEvent'){
//         status=0;
//         procArr.push(obj[arr[i].target_ref])
//         continue;
//       }  else {
//         getExecuteTaskInstList(arr[i].target_ref,arr,obj,procArr)
//       }
//     }else if(arr[i].target_ref==id){
//       let type=obj[arr[i].target_ref].act_type
//       if(type=='EndEvent'){
//         status=0;
//         procArr.push(obj[arr[i].target_ref])
//         break;
//       }
//     }
//   }
//
//   return procArr;
// }
// function  getExecuteTaskInstList1(id,arr,obj,procArr){
//   for(let i=0;i<arr.length;i++){
//     if(arr[i].proc_element_id==id){
//       let type=obj[arr[i].target_ref].act_type
//       if(type=='UserTask'){
//         procArr.push(obj[arr[i].target_ref])
//         continue;
//       }else if(type=='ExclusiveGateway'){
//         continue;
//       }else if(type=='EndEvent'){
//         procArr.push(obj[arr[i].target_ref])
//         break;
//       }
//       else {
//         getExecuteTaskInstList(arr[i].target_ref,arr,obj,procArr)
//       }
//     }else if(arr[i].target_ref==id){
//       let type=obj[arr[i].target_ref].act_type
//       if(type=='EndEvent'){
//         procArr.push(obj[arr[i].target_ref])
//         break;
//
//       }
//     }
//     // if(arr[i].proc_element_id==id){
//     //   console.log(obj[arr[i].target_ref])
//     //   let type=obj[arr[i].target_ref].act_type
//     //   if(type=='UserTask'){
//     //     procArr.push(obj[arr[i].target_ref])
//     //     continue;
//     //   }
//     //   else if(type=='ExclusiveGateway'){
//     //     continue;
//     //   } else if(type=='EndEvent'){
//     //     procArr.push(obj[arr[i].target_ref])
//     //     continue;
//     //   }  else {
//     //     procArr.push(obj[arr[i].proc_element_id])
//     //     getExecuteTaskInstList(arr[i].target_ref,arr,obj,procArr)
//     //   }
//     // }else if(arr[i].target_ref==id){
//     //   let type=obj[arr[i].target_ref].act_type
//     //   if(type=='EndEvent'){
//     //     procArr.push(obj[arr[i].target_ref])
//     //     break;
//     //
//     //   }
//     // }
//   }
//   return procArr;
// }

let arr9 = [
  {
    id: 610,
    act_type: 'StartEvent',
    act_name: '开始审批',
    proc_element_id: 'StartEvent_10qsrj2',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'qj:1:106',
    source_ref: '',
    target_ref: '',
    form: ''
  },
  {
    id: 611,
    act_type: 'SequenceFlow',
    act_name: '同意',
    proc_element_id: 'SequenceFlow_006q4nu',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'qj:1:106',
    source_ref: 'StartEvent_10qsrj2',
    target_ref: 'userTask_1kdidt3',
    form: ''
  },
  {
    id: 612,
    act_type: 'ExclusiveGateway',
    act_name: '',
    proc_element_id: 'ExclusiveGateway_1g54x0e',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'qj:1:106',
    source_ref: '',
    target_ref: '',
    form: ''
  },
  {
    id: 613,
    act_type: 'SequenceFlow',
    act_name: '同意',
    proc_element_id: 'SequenceFlow_1nacxki',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'qj:1:106',
    source_ref: 'userTask_1kdidt3',
    target_ref: 'ExclusiveGateway_1g54x0e',
    form: ''
  },
  {
    id: 614,
    act_type: 'SequenceFlow',
    act_name: '同意',
    proc_element_id: 'SequenceFlow_0xv54tz',
    condition: 'true',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'qj:1:106',
    source_ref: 'ExclusiveGateway_1g54x0e',
    target_ref: 'Task_10uh4u1',
    form: ''
  },
  {
    id: 615,
    act_type: 'EndEvent',
    act_name: '结束审批',
    proc_element_id: 'EndEvent_04cbbyh',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'qj:1:106',
    source_ref: '',
    target_ref: '',
    form: ''
  },
  {
    id: 616,
    act_type: 'SequenceFlow',
    act_name: '驳回',
    proc_element_id: 'SequenceFlow_01h0vv5',
    condition: 'false',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'qj:1:106',
    source_ref: 'ExclusiveGateway_1g54x0e',
    target_ref: 'EndEvent_04cbbyh',
    form: ''
  },
  {
    id: 617,
    act_type: 'ExclusiveGateway',
    act_name: '',
    proc_element_id: 'ExclusiveGateway_1br4dzd',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'qj:1:106',
    source_ref: '',
    target_ref: '',
    form: ''
  },
  {
    id: 618,
    act_type: 'SequenceFlow',
    act_name: '同意',
    proc_element_id: 'SequenceFlow_0c7tvme',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'qj:1:106',
    source_ref: 'Task_10uh4u1',
    target_ref: 'ExclusiveGateway_1br4dzd',
    form: ''
  },
  {
    id: 619,
    act_type: 'SequenceFlow',
    act_name: '同意',
    proc_element_id: 'SequenceFlow_1rv7pkb',
    condition: 'true',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'qj:1:106',
    source_ref: 'ExclusiveGateway_1br4dzd',
    target_ref: 'EndEvent_04cbbyh',
    form: ''
  },
  {
    id: 620,
    act_type: 'SequenceFlow',
    act_name: '驳回',
    proc_element_id: 'SequenceFlow_0s7r4y1',
    condition: 'false',
    assignee: '',
    candidate_users: '',
    candidate_group: '',
    proc_def_id: 'qj:1:106',
    source_ref: 'ExclusiveGateway_1br4dzd',
    target_ref: 'EndEvent_04cbbyh',
    form: ''
  },
  {
    id: 621,
    act_type: 'UserTask',
    act_name: '部门主管审批',
    proc_element_id: 'userTask_1kdidt3',
    condition: '',
    assignee: '',
    candidate_users: '["df1d6700-ead1-11e7-be11-f3a32e0f7d88"]',
    candidate_group: '',
    proc_def_id: 'qj:1:106',
    source_ref: '',
    target_ref: '',
    form: ''
  },
  {
    id: 622,
    act_type: 'UserTask',
    act_name: '经理审批',
    proc_element_id: 'Task_10uh4u1',
    condition: '',
    assignee: '',
    candidate_users: '',
    candidate_group: '["87fe5e90-e548-11e7-a1b7-8f22777cb839"]',
    proc_def_id: 'qj:1:106',
    source_ref: '',
    target_ref: '',
    form: ''
  }
]

function b() {
  let obj = {};
  let startId = ''
  let flow = [];
  let actArr = [];
  for (let i of arr9) {
    obj[i.proc_element_id] = i;
    if (i.act_type == 'StartEvent') {
      startId = i.proc_element_id;
      actArr = i
    } else if (i.act_type == 'SequenceFlow') {
      flow.push(i)
    }
  }
  console.log(startId)

  let a = getActInstList(startId, flow, obj, {})

  console.log(a)

  // let a=getExecuteTaskInstList('Task_1x4awke',flow,obj,[])
  //  let b=getExecuteTaskInstList1('SequenceFlow_1vyaoov',flow,obj,a)
  //  console.log(b)
}

b();
// function getTaskInstList(id,arr,obj,procArr){
//   procArr.push(obj[id])
//   for(let i=0;i<arr.length;i++){
//     if(arr[i].act_type=='SequenceFlow'&&arr[i].source_ref==id){
//      getTaskInstList(arr[i].target_ref,arr,obj,procArr)
//     }else if(arr[i].act_type=='UserTask'){
//       procArr.push(obj[arr[i].proc_element_id])
//       break;
//     }else if(arr[i].act_type=='ExclusiveGateway'){
//       break;
//     }
//   }
//   return procArr;
// }
function getTaskInstList(id, arr, obj, procObj) {
  // procObj[id]=obj[id];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].act_type == 'SequenceFlow' && arr[i].source_ref == id) {
      getTaskInstList(arr[i].target_ref, arr, obj, procObj)
    } else if (arr[i].act_type == 'UserTask' && arr[i].proc_element_id == id) {
      procObj[arr[i].proc_element_id] = obj[arr[i].proc_element_id];
      break;
    }
  }
  return procObj;
}

function getActInstList(id, arr, obj, procObj) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].source_ref == id) {
      let type = obj[arr[i].target_ref].act_type
      procObj[arr[i].proc_element_id] = obj[arr[i].proc_element_id];
      let item = obj[arr[i].target_ref];
      let index = obj[arr[i].target_ref].proc_element_id;
      if (type == 'UserTask') {
        procObj[index] = item;
        continue;
      } else if (type == 'ExclusiveGateway') {
        procObj[index] = item;
        continue;
      } else if (type == 'EndEvent') {
        procObj[index] = item;
        continue
      } else {
        procObj[index] = item;
        getActInstList(arr[i].target_ref, arr, obj, procObj)
      }
    }
  }
  return procObj;
}


