// eval('var '+ "msg"+'=123;');
//
// console.log(typeof false)
// let c=`${msg=='重要'}`
//
// if(c=='false'){
// console.log(111)
// }
// console.log(Math.random().toString(36).substr(2,7));
// let a=111;
// console.log(a.toString(36))


let arr = [
  {
    "id": 2255,
    "act_type": "StartEvent",
    "act_name": "发起审批",
    "proc_element_id": "StartEvent_1c674pa",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  {
    "id": 2256,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_1g6k69c",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "StartEvent_1c674pa",
    "target_ref": "Task_0jyh6tr",
    "form": ""
  },
  {
    "id": 2257,
    "act_type": "UserTask",
    "act_name": "审批",
    "proc_element_id": "Task_0jyh6tr",
    "condition": "",
    "assignee": "",
    "candidate_users": ["f7e653c0-1a90-11e8-93c4-9320b214222", "f7e653c0-1a90-11e8-93c4-93339821481"],
    "candidate_group": "",
    "depart": "",
    "approve_type": "1",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  {
    "id": 2258,
    "act_type": "ExclusiveGateway",
    "act_name": "",
    "proc_element_id": "ExclusiveGateway_0wf5h6t",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  {
    "id": 2259,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_0jki9fv",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "Task_0jyh6tr",
    "target_ref": "ExclusiveGateway_0wf5h6t",
    "form": ""
  },
  {
    "id": 2260,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_0fpn3co",
    "condition": "true",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_0wf5h6t",
    "target_ref": "ExclusiveGateway_13ybony",
    "form": ""
  },
  {
    "id": 2261,
    "act_type": "ParallelGateway",
    "act_name": "",
    "proc_element_id": "ExclusiveGateway_13ybony",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  {
    "id": 2262,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_082wase",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_13ybony",
    "target_ref": "Task_0wvyquv",
    "form": ""
  }, {
    "id": 2263,
    "act_type": "UserTask",
    "act_name": "并行1审批",
    "proc_element_id": "Task_0wvyquv",
    "condition": "",
    "assignee": "",
    "candidate_users": ["4f1e19e0 - 623    d-11e8 - 8    ace-3    feb8b0156bf","   eb469790-59    a8-11e8 - 8595 - 2    bf7eabc598a"],
    "candidate_group": "",
    "depart": "",
    "approve_type": "1",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  }, {
    "id": 2264,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_1d5m11l",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_13ybony",
    "target_ref": "Task_1uwvd2t",
    "form": ""
  }, {
    "id": 2265,
    "act_type": "UserTask",
    "act_name": "并行2审批",
    "proc_element_id": "Task_1uwvd2t",
    "condition": "",
    "assignee": "",
    "candidate_users": ["    e98d0360-623    d-11e8 - 8    ace-3    feb8b0156bf","    e98d0361-623    d-11e8 - 8    ace-3    feb8b0156bf"],
    "candidate_group": "",
    "depart": "",
    "approve_type": "1",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  }, {
    "id": 2266,
    "act_type": "ExclusiveGateway",
    "act_name": "",
    "proc_element_id": "ExclusiveGateway_0jed1z2",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  }, {
    "id": 2267,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_1hkids2",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "Task_0wvyquv",
    "target_ref": "ExclusiveGateway_0jed1z2",
    "form": ""
  }, {
    "id": 2268,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_0cek2p1",
    "condition": "true",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_0jed1z2",
    "target_ref": "ExclusiveGateway_1yngg4i",
    "form": ""
  }, {
    "id": 2269,
    "act_type": "ParallelGateway",
    "act_name": "",
    "proc_element_id": "ExclusiveGateway_1yngg4i",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  }, {
    "id": 2270,
    "act_type": "ExclusiveGateway",
    "act_name": "",
    "proc_element_id": "ExclusiveGateway_0epki0m",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  }, {
    "id": 2271,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_0zfafdj",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "Task_1uwvd2t",
    "target_ref": "ExclusiveGateway_0epki0m",
    "form": ""
  }, {
    "id": 2272,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_14l4w10",
    "condition": "true",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_0epki0m",
    "target_ref": "ExclusiveGateway_1yngg4i",
    "form": ""
  }, {
    "id": 2273,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_0i4gqgl",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_1yngg4i",
    "target_ref": "Task_0s8ygva",
    "form": ""
  }, {
    "id": 2274,
    "act_type": "UserTask",
    "act_name": "测试7审批",
    "proc_element_id": "Task_0s8ygva",
    "condition": "",
    "assignee": "",
    "candidate_users": ["    e98d0362-623    d-11e8 - 8    ace-3    feb8b0156bf"],    "candidate_group": "",    "depart": "",    "approve_type": "1",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  }, {
    "id": 2275,
    "act_type": "ExclusiveGateway",
    "act_name": "",
    "proc_element_id": "ExclusiveGateway_1y5s721",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  }, {
    "id": 2276,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_1i0tqa8",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "Task_0s8ygva",
    "target_ref": "ExclusiveGateway_1y5s721",
    "form": ""
  }, {
    "id": 2277,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_0ujxh2f",
    "condition": "true",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_1y5s721",
    "target_ref": "Task_03ozx8s",
    "form": ""
  }, {
    "id": 2278,
    "act_type": "UserTask",
    "act_name": "处理",
    "proc_element_id": "Task_03ozx8s",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "2",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  }, {
    "id": 2279,
    "act_type": "ExclusiveGateway",
    "act_name": "",
    "proc_element_id": "ExclusiveGateway_1jc6o78",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  }, {
    "id": 2280,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_0p2e7ms",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "Task_03ozx8s",
    "target_ref": "ExclusiveGateway_1jc6o78",
    "form": ""
  }, {
    "id": 2281,
    "act_type": "EndEvent",
    "act_name": "结束审批",
    "proc_element_id": "EndEvent_1fstcqa",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  }, {
    "id": 2282,
    "act_type": "SequenceFlow",
    "act_name": "处理",
    "proc_element_id": "SequenceFlow_01hfeon",
    "condition": "true",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_1jc6o78",
    "target_ref": "EndEvent_1fstcqa",
    "form": ""
  }, {
    "id": 2283,
    "act_type": "SequenceFlow",
    "act_name": "驳回",
    "proc_element_id": "SequenceFlow_022ljri",
    "condition": "false",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_0epki0m",
    "target_ref": "EndEvent_1fstcqa",
    "form": ""
  }, {
    "id": 2284,
    "act_type": "SequenceFlow",
    "act_name": "驳回",
    "proc_element_id": "SequenceFlow_0jz7ovb",
    "condition": "false",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_0jed1z2",
    "target_ref": "EndEvent_1fstcqa",
    "form": ""
  }]
let obj = {
  "StartEvent_1c674pa": {
    "id": 2255,
    "act_type": "StartEvent",
    "act_name": "发起审批",
    "proc_element_id": "StartEvent_1c674pa",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  "SequenceFlow_1g6k69c": {
    "id": 2256,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_1g6k69c",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "StartEvent_1c674pa",
    "target_ref": "Task_0jyh6tr",
    "form": ""
  },
  "Task_0jyh6tr": {
    "id": 2257,
    "act_type": "UserTask",
    "act_name": "审批",
    "proc_element_id": "Task_0jyh6tr",
    "condition": "",
    "assignee": "",
    "candidate_users": ["f7e653c0-1a90-11e8-93c4-9320b214222", "f7e653c0-1a90-11e8-93c4-93339821481"],
    "candidate_group": "",
    "depart": "",
    "approve_type": "1",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  "ExclusiveGateway_0wf5h6t": {
    "id": 2258,
    "act_type": "ExclusiveGateway",
    "act_name": "",
    "proc_element_id": "ExclusiveGateway_0wf5h6t",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  "SequenceFlow_0jki9fv": {
    "id": 2259,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_0jki9fv",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "Task_0jyh6tr",
    "target_ref": "ExclusiveGateway_0wf5h6t",
    "form": ""
  },
  "SequenceFlow_0fpn3co": {
    "id": 2260,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_0fpn3co",
    "condition": "true",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_0wf5h6t",
    "target_ref": "ExclusiveGateway_13ybony",
    "form": ""
  },
  "ExclusiveGateway_13ybony": {
    "id": 2261,
    "act_type": "ParallelGateway",
    "act_name": "",
    "proc_element_id": "ExclusiveGateway_13ybony",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  "SequenceFlow_082wase": {
    "id": 2262,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_082wase",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_13ybony",
    "target_ref": "Task_0wvyquv",
    "form": ""
  },
  "Task_0wvyquv": {
    "id": 2263,
    "act_type": "UserTask",
    "act_name": "并行1审批",
    "proc_element_id": "Task_0wvyquv",
    "condition": "",
    "assignee": "",
    "candidate_users": ["4f1e19e0-623d-11e8-8ace-3feb8b0156bf", "eb469790-59a8-11e8-8595-2bf7eabc598a"],
    "candidate_group": "",
    "depart": "",
    "approve_type": "1",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  "SequenceFlow_1d5m11l": {
    "id": 2264,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_1d5m11l",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_13ybony",
    "target_ref": "Task_1uwvd2t",
    "form": ""
  },
  "Task_1uwvd2t": {
    "id": 2265,
    "act_type": "UserTask",
    "act_name": "并行2审批",
    "proc_element_id": "Task_1uwvd2t",
    "condition": "",
    "assignee": "",
    "candidate_users": ["98d0360-623    d-11e8 - 8    ace-3    feb8b0156bf","    e98d0361-623    d-11e8 - 8    ace-3    feb8b0156bf"],
    "candidate_group": "",
    "depart": "",
    "approve_type": "1",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  "ExclusiveGateway_0jed1z2": {
    "id": 2266,
    "act_type": "ExclusiveGateway",
    "act_name": "",
    "proc_element_id": "ExclusiveGateway_0jed1z2",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  "SequenceFlow_1hkids2": {
    "id": 2267,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_1hkids2",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "Task_0wvyquv",
    "target_ref": "ExclusiveGateway_0jed1z2",
    "form": ""
  },
  "SequenceFlow_0cek2p1": {
    "id": 2268,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_0cek2p1",
    "condition": "true",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_0jed1z2",
    "target_ref": "ExclusiveGateway_1yngg4i",
    "form": ""
  },
  "ExclusiveGateway_1yngg4i": {
    "id": 2269,
    "act_type": "ParallelGateway",
    "act_name": "",
    "proc_element_id": "ExclusiveGateway_1yngg4i",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  "ExclusiveGateway_0epki0m": {
    "id": 2270,
    "act_type": "ExclusiveGateway",
    "act_name": "",
    "proc_element_id": "ExclusiveGateway_0epki0m",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  "SequenceFlow_0zfafdj": {
    "id": 2271,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_0zfafdj",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "Task_1uwvd2t",
    "target_ref": "ExclusiveGateway_0epki0m",
    "form": ""
  },
  "SequenceFlow_14l4w10": {
    "id": 2272,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_14l4w10",
    "condition": "true",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_0epki0m",
    "target_ref": "ExclusiveGateway_1yngg4i",
    "form": ""
  },
  "SequenceFlow_0i4gqgl": {
    "id": 2273,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_0i4gqgl",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_1yngg4i",
    "target_ref": "Task_0s8ygva",
    "form": ""
  },
  "Task_0s8ygva": {
    "id": 2274,
    "act_type": "UserTask",
    "act_name": "测试7审批",
    "proc_element_id": "Task_0s8ygva",
    "condition": "",
    "assignee": "",
    "candidate_users": ["    e98d0362-623    d-11e8 - 8    ace-3    feb8b0156bf"],
    "candidate_group": "",
    "depart": "",
    "approve_type": "1",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  "ExclusiveGateway_1y5s721": {
    "id": 2275,
    "act_type": "ExclusiveGateway",
    "act_name": "",
    "proc_element_id": "ExclusiveGateway_1y5s721",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  "SequenceFlow_1i0tqa8": {
    "id": 2276,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_1i0tqa8",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "Task_0s8ygva",
    "target_ref": "ExclusiveGateway_1y5s721",
    "form": ""
  },
  "SequenceFlow_0ujxh2f": {
    "id": 2277,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_0ujxh2f",
    "condition": "true",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_1y5s721",
    "target_ref": "Task_03ozx8s",
    "form": ""
  },
  "Task_03ozx8s": {
    "id": 2278,
    "act_type": "UserTask",
    "act_name": "处理",
    "proc_element_id": "Task_03ozx8s",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "2",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  "ExclusiveGateway_1jc6o78": {
    "id": 2279,
    "act_type": "ExclusiveGateway",
    "act_name": "",
    "proc_element_id": "ExclusiveGateway_1jc6o78",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  "SequenceFlow_0p2e7ms": {
    "id": 2280,
    "act_type": "SequenceFlow",
    "act_name": "同意",
    "proc_element_id": "SequenceFlow_0p2e7ms",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "Task_03ozx8s",
    "target_ref": "ExclusiveGateway_1jc6o78",
    "form": ""
  },
  "EndEvent_1fstcqa": {
    "id": 2281,
    "act_type": "EndEvent",
    "act_name": "结束审批",
    "proc_element_id": "EndEvent_1fstcqa",
    "condition": "",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "",
    "target_ref": "",
    "form": ""
  },
  "SequenceFlow_01hfeon": {
    "id": 2282,
    "act_type": "SequenceFlow",
    "act_name": "处理",
    "proc_element_id": "SequenceFlow_01hfeon",
    "condition": "true",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_1jc6o78",
    "target_ref": "EndEvent_1fstcqa",
    "form": ""
  },
  "SequenceFlow_022ljri": {
    "id": 2283,
    "act_type": "SequenceFlow",
    "act_name": "驳回",
    "proc_element_id": "SequenceFlow_022ljri",
    "condition": "false",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_0epki0m",
    "target_ref": "EndEvent_1fstcqa",
    "form": ""
  },
  "SequenceFlow_0jz7ovb": {
    "id": 2284,
    "act_type": "SequenceFlow",
    "act_name": "驳回",
    "proc_element_id": "SequenceFlow_0jz7ovb",
    "condition": "false",
    "assignee": "",
    "candidate_users": "",
    "candidate_group": "",
    "depart": "",
    "approve_type": "",
    "proc_def_id": "anjianlcb:7:133",
    "source_ref": "ExclusiveGateway_0jed1z2",
    "target_ref": "EndEvent_1fstcqa",
    "form": ""
  }
}
let proc_element_id = 'Task_0wvyquv'
let flowElement = 'SequenceFlow_0jz7ovb'

function a() {
  let procModelObj = getExecuteActInstList(proc_element_id, arr, obj, []);
  let arrs = [];
  let userIds = [];
  let endStatus = 0;
  procModelObj = getFlowActInstList(flowElement, arr, obj, procModelObj);
  let ParallerFlowId;
  for (let i in procModelObj) {
    if (procModelObj[i].act_type == 'ParallelGateway') {
      ParallerFlowId = procModelObj[i].proc_element_id;
    }
  }
  for (let i in procModelObj) {
    let actinst = {
      act_name: procModelObj[i].act_name,
      act_type: procModelObj[i].act_type,
      assignee: '',
      approve_type: '',
      group: '',
      proc_element_id: procModelObj[i].proc_element_id,
      start_time: new Date(),
      duration: 0
    };
    if (procModelObj[i].act_type == 'UserTask') {
      actinst.act_status = 0;
      actinst.approve_type = procModelObj[i].approve_type;
      arrs.push(actinst);
    } else if (procModelObj[i].act_type == 'EndEvent') {
      actinst.end_time = new Date();
      actinst.act_status = 1;
      endStatus = 1;
      arrs.push(actinst);
    } else {
      actinst.end_time = new Date();
      actinst.act_status = 1;
      arrs.push(actinst);
    }

  }
  console.log(arrs)

}

a();

function getExecuteActInstList(id, arr, obj, procObj) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].source_ref == id) {
      procObj[arr[i].proc_element_id] = obj[arr[i].proc_element_id];
      let type = obj[arr[i].target_ref].act_type;
      let item = obj[arr[i].target_ref];
      let index = obj[arr[i].target_ref].proc_element_id;
      if (type == 'UserTask') {
        procObj[index] = item;

      } else if (type == 'ExclusiveGateway') {
        procObj[index] = item;

      } else if (type == 'ParallelGateway') {
        procObj[index] = item;

      } else if (type == 'EndEvent') {
        procObj[index] = item;

      }
      else {
        procObj[index] = item;
        getExecuteActInstList(arr[i].target_ref, arr, obj, procObj)
      }
    }
  }
  return procObj;
}

//得到往下执行的节点
function getFlowActInstList(id, arr, obj, procObj) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].proc_element_id == id) {
      let type = obj[arr[i].target_ref].act_type;
      procObj[arr[i].proc_element_id] = obj[arr[i].proc_element_id];
      let item = obj[arr[i].target_ref];
      let index = obj[arr[i].target_ref].proc_element_id;
      if (type == 'UserTask') {
        procObj[index] = item;

      } else if (type == 'ExclusiveGateway') {
        procObj[index] = item;

      } else if (type == 'EndEvent') {
        procObj[index] = item;

      } else {
        procObj[index] = item;
        getExecuteActInstList(arr[i].target_ref, arr, obj, procObj)
      }
    }
  }
  return procObj;
}
