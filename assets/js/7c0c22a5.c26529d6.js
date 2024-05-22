"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4596],{15399:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>u,toc:()=>r});var o=t(85893),s=t(11151);const i={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/tutorial/human-in-the-loop.ipynb",source_notebook:"/website/docs/tutorial/human-in-the-loop.ipynb",title:"Allowing Human Feedback in Agents"},a="Allowing Human Feedback in Agents",u={id:"tutorial/human-in-the-loop",title:"Allowing Human Feedback in Agents",description:"Open In Colab",source:"@site/docs/tutorial/human-in-the-loop.mdx",sourceDirName:"tutorial",slug:"/tutorial/human-in-the-loop",permalink:"/autogen/docs/tutorial/human-in-the-loop",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/tutorial/human-in-the-loop.ipynb",tags:[],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/website/docs/tutorial/human-in-the-loop.ipynb",source_notebook:"/website/docs/tutorial/human-in-the-loop.ipynb",title:"Allowing Human Feedback in Agents"},sidebar:"docsSidebar",previous:{title:"Terminating Conversations Between Agents",permalink:"/autogen/docs/tutorial/chat-termination"},next:{title:"Code Executors",permalink:"/autogen/docs/tutorial/code-executors"}},h={},r=[{value:"Human Input Modes",id:"human-input-modes",level:2},{value:"Human Input Mode = <code>NEVER</code>",id:"human-input-mode-never",level:2},{value:"Human Input Mode = <code>ALWAYS</code>",id:"human-input-mode-always",level:2},{value:"Human Input Mode = <code>TERMINATE</code>",id:"human-input-mode-terminate",level:2},{value:"Summary",id:"summary",level:2}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"allowing-human-feedback-in-agents",children:"Allowing Human Feedback in Agents"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/website/docs/tutorial/human-in-the-loop.ipynb",children:(0,o.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/website/docs/tutorial/human-in-the-loop.ipynb",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,o.jsxs)(n.p,{children:["In the last two chapters we introduced the ",(0,o.jsx)(n.code,{children:"ConversableAgent"})," class and\nshowed how you can use it to create autonomous\n(",(0,o.jsx)(n.code,{children:"human_input_mode=NEVER"}),") agents that can accomplish tasks. We also\nshowed how to properly terminate a conversation between agents."]}),"\n",(0,o.jsx)(n.p,{children:"But many applications may require putting humans in-the-loop with\nagents. For example, to allow human feedback to steer agents in the\nright direction, specify goals, etc. In this chapter, we will show how\nAutoGen supports human intervention."}),"\n",(0,o.jsxs)(n.p,{children:["In AutoGen\u2019s ",(0,o.jsx)(n.code,{children:"ConversableAgent"}),", the human-the-loop component sits in\nfront of the auto-reply components. It can intercept the incoming\nmessages and decide whether to pass them to the auto-reply components or\nto provide human feedback. The figure below illustrates the design."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Human in the loop",src:t(23729).Z+"",width:"705",height:"429"})}),"\n",(0,o.jsxs)(n.p,{children:["The human-in-the-loop component can be customized through the\n",(0,o.jsx)(n.code,{children:"human_input_mode"})," parameter. We will show you how to use it in the\nfollowing sections."]}),"\n",(0,o.jsx)(n.h2,{id:"human-input-modes",children:"Human Input Modes"}),"\n",(0,o.jsxs)(n.p,{children:["Currently AutoGen supports three modes for human input. The mode is\nspecified through the ",(0,o.jsx)(n.code,{children:"human_input_mode"})," argument of the\n",(0,o.jsx)(n.code,{children:"ConversableAgent"}),". The three modes are:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"NEVER"}),": human input is never requested."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"TERMINATE"})," (default): human input is only requested when a\ntermination condition is met. Note that in this mode if the human\nchooses to intercept and reply, the conversation continues and the\ncounter used by ",(0,o.jsx)(n.code,{children:"max_consecutive_auto_reply"})," is reset."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ALWAYS"}),": human input is always requested and the human can choose\nto skip and trigger an auto-reply, intercept and provide feedback,\nor terminate the conversation. Note that in this mode termination\nbased on ",(0,o.jsx)(n.code,{children:"max_consecutive_auto_reply"})," is ignored."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The previous chapters already showed many examples of the cases when\n",(0,o.jsx)(n.code,{children:"human_input_mode"})," is ",(0,o.jsx)(n.code,{children:"NEVER"}),". Below we show one such example again and\nthen show the differences when this mode is set to ",(0,o.jsx)(n.code,{children:"ALWAYS"})," and ",(0,o.jsx)(n.code,{children:"NEVER"}),"\ninstead."]}),"\n",(0,o.jsxs)(n.h2,{id:"human-input-mode-never",children:["Human Input Mode = ",(0,o.jsx)(n.code,{children:"NEVER"})]}),"\n",(0,o.jsx)(n.p,{children:"In this mode, human input is never requested and the termination\nconditions are used to terminate. This mode is useful when you want your\nagents to act fully autonomously."}),"\n",(0,o.jsx)(n.p,{children:"Here is an example of using this mode to run a simple guess-a-number\ngame between two agents, the termination message is set to check for the\nnumber that is the correct guess."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import os\n\nfrom autogen import ConversableAgent\n\nagent_with_number = ConversableAgent(\n    "agent_with_number",\n    system_message="You are playing a game of guess-my-number. You have the "\n    "number 53 in your mind, and I will try to guess it. "\n    "If I guess too high, say \'too high\', if I guess too low, say \'too low\'. ",\n    llm_config={"config_list": [{"model": "gpt-4", "api_key": os.environ["OPENAI_API_KEY"]}]},\n    is_termination_msg=lambda msg: "53" in msg["content"],  # terminate if the number is guessed by the other agent\n    human_input_mode="NEVER",  # never ask for human input\n)\n\nagent_guess_number = ConversableAgent(\n    "agent_guess_number",\n    system_message="I have a number in my mind, and you will try to guess it. "\n    "If I say \'too high\', you should guess a lower number. If I say \'too low\', "\n    "you should guess a higher number. ",\n    llm_config={"config_list": [{"model": "gpt-4", "api_key": os.environ["OPENAI_API_KEY"]}]},\n    human_input_mode="NEVER",\n)\n\nresult = agent_with_number.initiate_chat(\n    agent_guess_number,\n    message="I have a number between 1 and 100. Guess it!",\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"agent_with_number (to agent_guess_number):\n\nI have a number between 1 and 100. Guess it!\n\n--------------------------------------------------------------------------------\nagent_guess_number (to agent_with_number):\n\nIs it 50?\n\n--------------------------------------------------------------------------------\nagent_with_number (to agent_guess_number):\n\nToo low.\n\n--------------------------------------------------------------------------------\nagent_guess_number (to agent_with_number):\n\nIs it 75?\n\n--------------------------------------------------------------------------------\nagent_with_number (to agent_guess_number):\n\nToo high.\n\n--------------------------------------------------------------------------------\nagent_guess_number (to agent_with_number):\n\nIs it 63?\n\n--------------------------------------------------------------------------------\nagent_with_number (to agent_guess_number):\n\nToo high.\n\n--------------------------------------------------------------------------------\nagent_guess_number (to agent_with_number):\n\nIs it 57?\n\n--------------------------------------------------------------------------------\nagent_with_number (to agent_guess_number):\n\nToo high.\n\n--------------------------------------------------------------------------------\nagent_guess_number (to agent_with_number):\n\nIs it 54?\n\n--------------------------------------------------------------------------------\nagent_with_number (to agent_guess_number):\n\nToo high.\n\n--------------------------------------------------------------------------------\nagent_guess_number (to agent_with_number):\n\nIs it 52?\n\n--------------------------------------------------------------------------------\nagent_with_number (to agent_guess_number):\n\nToo low.\n\n--------------------------------------------------------------------------------\nagent_guess_number (to agent_with_number):\n\nIs it 53?\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsx)(n.p,{children:"Yay! The game is over. The guessing agent got the number correctly using\nbinary search \u2013 very efficient! You can see that the conversation was\nterminated after the guessing agent said the correct number, which\ntriggered the message-based termination condition."}),"\n",(0,o.jsxs)(n.h2,{id:"human-input-mode-always",children:["Human Input Mode = ",(0,o.jsx)(n.code,{children:"ALWAYS"})]}),"\n",(0,o.jsx)(n.p,{children:"In this mode, human input is always requested and the human can choose\nto skip, intercept , or terminate the conversation. Let us see this mode\nin action by playing the same game as before with the agent with the\nnumber, but this time participating in the game as a human. We will be\nthe agent that is guessing the number, and play against the agent with\nthe number from before."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'human_proxy = ConversableAgent(\n    "human_proxy",\n    llm_config=False,  # no LLM used for human proxy\n    human_input_mode="ALWAYS",  # always ask for human input\n)\n\n# Start a chat with the agent with number with an initial guess.\nresult = human_proxy.initiate_chat(\n    agent_with_number,  # this is the same agent with the number as before\n    message="10",\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"human_proxy (to agent_with_number):\n\n10\n\n--------------------------------------------------------------------------------\nagent_with_number (to human_proxy):\n\nToo low.\n\n--------------------------------------------------------------------------------\nhuman_proxy (to agent_with_number):\n\n79\n\n--------------------------------------------------------------------------------\nagent_with_number (to human_proxy):\n\nToo high.\n\n--------------------------------------------------------------------------------\nhuman_proxy (to agent_with_number):\n\n76\n\n--------------------------------------------------------------------------------\nagent_with_number (to human_proxy):\n\nToo high.\n\n--------------------------------------------------------------------------------\nhuman_proxy (to agent_with_number):\n\nI give up\n\n--------------------------------------------------------------------------------\nagent_with_number (to human_proxy):\n\nThat's okay! The number I was thinking of was 53.\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsx)(n.p,{children:"If you run the code above, you will be prompt to enter a response each\ntime it is your turn to speak. You can see the human in the conversation\nwas not very good at guessing the number\u2026 but hey the agent was nice\nenough to give out the number in the end."}),"\n",(0,o.jsxs)(n.h2,{id:"human-input-mode-terminate",children:["Human Input Mode = ",(0,o.jsx)(n.code,{children:"TERMINATE"})]}),"\n",(0,o.jsxs)(n.p,{children:["In this mode, human input is only requested when a termination condition\nis met. ",(0,o.jsx)(n.strong,{children:"If the human choose to intercept and reply, the counter will\nbe reset"}),"; if the human choose to skip, automatic reply mechanism will\nbe used; if the human choose to terminate, the conversation will be\nterminated."]}),"\n",(0,o.jsx)(n.p,{children:"Let us see this mode in action by playing the same game again, but this\ntime the guessing agent will only have two chances to guess the number,\nand if it fails, the human will be asked to provide feedback, and the\nguessing agent gets two more chances. If the correct number is guessed\neventually, the conversation will be terminated."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'agent_with_number = ConversableAgent(\n    "agent_with_number",\n    system_message="You are playing a game of guess-my-number. "\n    "In the first game, you have the "\n    "number 53 in your mind, and I will try to guess it. "\n    "If I guess too high, say \'too high\', if I guess too low, say \'too low\'. ",\n    llm_config={"config_list": [{"model": "gpt-4", "api_key": os.environ["OPENAI_API_KEY"]}]},\n    max_consecutive_auto_reply=1,  # maximum number of consecutive auto-replies before asking for human input\n    is_termination_msg=lambda msg: "53" in msg["content"],  # terminate if the number is guessed by the other agent\n    human_input_mode="TERMINATE",  # ask for human input until the game is terminated\n)\n\nagent_guess_number = ConversableAgent(\n    "agent_guess_number",\n    system_message="I have a number in my mind, and you will try to guess it. "\n    "If I say \'too high\', you should guess a lower number. If I say \'too low\', "\n    "you should guess a higher number. ",\n    llm_config={"config_list": [{"model": "gpt-4", "api_key": os.environ["OPENAI_API_KEY"]}]},\n    human_input_mode="NEVER",\n)\n\nresult = agent_with_number.initiate_chat(\n    agent_guess_number,\n    message="I have a number between 1 and 100. Guess it!",\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"agent_with_number (to agent_guess_number):\n\nI have a number between 1 and 100. Guess it!\n\n--------------------------------------------------------------------------------\nagent_guess_number (to agent_with_number):\n\nIs it 50?\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nagent_with_number (to agent_guess_number):\n\nToo low.\n\n--------------------------------------------------------------------------------\nagent_guess_number (to agent_with_number):\n\nIs it 75?\n\n--------------------------------------------------------------------------------\nagent_with_number (to agent_guess_number):\n\nIt is too high my friend. \n\n--------------------------------------------------------------------------------\nagent_guess_number (to agent_with_number):\n\nIs it 60?\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nagent_with_number (to agent_guess_number):\n\nToo high.\n\n--------------------------------------------------------------------------------\nagent_guess_number (to agent_with_number):\n\nIs it 55?\n\n--------------------------------------------------------------------------------\nagent_with_number (to agent_guess_number):\n\nstill too high, but you are very close.\n\n--------------------------------------------------------------------------------\nagent_guess_number (to agent_with_number):\n\nIs it 52?\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nagent_with_number (to agent_guess_number):\n\nToo low.\n\n--------------------------------------------------------------------------------\nagent_guess_number (to agent_with_number):\n\nIs it 54?\n\n--------------------------------------------------------------------------------\nagent_with_number (to agent_guess_number):\n\nAlmost there! \n\n--------------------------------------------------------------------------------\nagent_guess_number (to agent_with_number):\n\nIs it 53?\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsx)(n.p,{children:"In the previous conversation,"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"When the agent guessed \u201c74\u201d, the human said \u201cIt is too high my\nfriend.\u201d"}),"\n",(0,o.jsx)(n.li,{children:"When the agent guessed \u201c55\u201d, the human said \u201cstill too high, but you\nare very close.\u201d"}),"\n",(0,o.jsx)(n.li,{children:"When the agent guessed \u201c54\u201d, the human said \u201cAlmost there!\u201d"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Each time after one auto-reply from the agent with the number, the human\nwas asked to provide feedback. Once the human provided feedback, the\ncounter was reset. The conversation was terminated after the agent\ncorrectly guessed \u201c53\u201d."}),"\n",(0,o.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(n.p,{children:"In this chapter, we showed you how to use the human-in-the-loop\ncomponent to provide human feedback to agent and to terminate\nconversation. We also showed you the different human input modes and how\nthey affect the behavior of the human-in-the-loop component."}),"\n",(0,o.jsx)(n.p,{children:"The next chapter will be all about code executor \u2013 the most powerful\ncomponent second only to LLMs."})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},23729:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/human-in-the-loop-56dc002683ab4481042ffd3d346d1759.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>u,a:()=>a});var o=t(67294);const s={},i=o.createContext(s);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);