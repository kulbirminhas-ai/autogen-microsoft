"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[653],{83544:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=t(85893),a=t(11151);const s={custom_edit_url:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_nested_chats_chess_altmodels.ipynb",description:"LLM-backed agents playing chess with each other using nested chats.",source_notebook:"/notebook/agentchat_nested_chats_chess_altmodels.ipynb",tags:["nested chat","tool use","orchestration"],title:"Conversational Chess using non-OpenAI clients"},l="Conversational Chess using non-OpenAI clients",r={id:"notebooks/agentchat_nested_chats_chess_altmodels",title:"Conversational Chess using non-OpenAI clients",description:"LLM-backed agents playing chess with each other using nested chats.",source:"@site/docs/notebooks/agentchat_nested_chats_chess_altmodels.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_nested_chats_chess_altmodels",permalink:"/autogen/docs/notebooks/agentchat_nested_chats_chess_altmodels",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_nested_chats_chess_altmodels.ipynb",tags:[{label:"nested chat",permalink:"/autogen/docs/tags/nested-chat"},{label:"tool use",permalink:"/autogen/docs/tags/tool-use"},{label:"orchestration",permalink:"/autogen/docs/tags/orchestration"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/microsoft/autogen/edit/main/notebook/agentchat_nested_chats_chess_altmodels.ipynb",description:"LLM-backed agents playing chess with each other using nested chats.",source_notebook:"/notebook/agentchat_nested_chats_chess_altmodels.ipynb",tags:["nested chat","tool use","orchestration"],title:"Conversational Chess using non-OpenAI clients"},sidebar:"notebooksSidebar",previous:{title:"Nested Chats for Tool Use in Conversational Chess",permalink:"/autogen/docs/notebooks/agentchat_nested_chats_chess"},next:{title:"Solving Complex Tasks with A Sequence of Nested Chats",permalink:"/autogen/docs/notebooks/agentchat_nested_sequential_chats"}},i={},c=[{value:"Installation",id:"installation",level:2},{value:"Setting up LLMs",id:"setting-up-llms",level:2},{value:"Creating agents",id:"creating-agents",level:2},{value:"Playing the game",id:"playing-the-game",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"conversational-chess-using-non-openai-clients",children:"Conversational Chess using non-OpenAI clients"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://colab.research.google.com/github/microsoft/autogen/blob/main/notebook/agentchat_nested_chats_chess_altmodels.ipynb",children:(0,o.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(n.a,{href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_nested_chats_chess_altmodels.ipynb",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,o.jsx)(n.p,{children:"This notebook provides tips for using non-OpenAI models when using\nfunctions/tools."}),"\n",(0,o.jsxs)(n.p,{children:["The code is based on ",(0,o.jsx)(n.a,{href:"../../docs/notebooks/agentchat_nested_chats_chess",children:"this\nnotebook"}),", which\nprovides a detailed look at nested chats for tool use. Please refer to\nthat notebook for more on nested chats as this will be concentrated on\ntweaks to improve performance with non-OpenAI models."]}),"\n",(0,o.jsx)(n.p,{children:"The notebook represents a chess game between two players with a nested\nchat to determine the available moves and select a move to make."}),"\n",(0,o.jsxs)(n.p,{children:["This game contains a couple of functions/tools that the LLMs must use\ncorrectly by the LLMs: - ",(0,o.jsx)(n.code,{children:"get_legal_moves"})," to get a list of current\nlegal moves. - ",(0,o.jsx)(n.code,{children:"make_move"})," to make a move."]}),"\n",(0,o.jsx)(n.p,{children:"Two agents will be used to represent the white and black players, each\nassociated with a different LLM cloud provider and model: - Anthropic\u2019s\nSonnet 3.5 will be Player_White - Mistral\u2019s Mixtral 8x7B (using\nTogether.AI) will be Player_Black"}),"\n",(0,o.jsx)(n.p,{children:"As this involves function calling, we use larger, more capable, models\nfrom these providers."}),"\n",(0,o.jsx)(n.p,{children:"The nested chat will be supported be a board proxy agent who is set up\nto execute the tools and manage the game."}),"\n",(0,o.jsxs)(n.p,{children:["Tips to improve performance with these non-OpenAI models will be noted\nthroughout ",(0,o.jsx)(n.strong,{children:"in bold"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,o.jsxs)(n.p,{children:["First, you need to install the ",(0,o.jsx)(n.code,{children:"pyautogen"})," and ",(0,o.jsx)(n.code,{children:"chess"})," packages to use\nAutoGen. We\u2019ll include Anthropic and Together.AI libraries."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"! pip install -qqq pyautogen[anthropic,together] chess\n"})}),"\n",(0,o.jsx)(n.h2,{id:"setting-up-llms",children:"Setting up LLMs"}),"\n",(0,o.jsxs)(n.p,{children:["We\u2019ll use the Anthropic (",(0,o.jsx)(n.code,{children:"api_type"})," is ",(0,o.jsx)(n.code,{children:"anthropic"}),") and Together.AI\n(",(0,o.jsx)(n.code,{children:"api_type"})," is ",(0,o.jsx)(n.code,{children:"together"}),") client classes, with their respective models,\nwhich both support function calling."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import os\n\nimport chess\nimport chess.svg\nfrom IPython.display import display\nfrom typing_extensions import Annotated\n\nfrom autogen import ConversableAgent, register_function\n\n# Let\'s set our two player configs, specifying clients and models\n\n# Anthropic\'s Sonnet for player white\nplayer_white_config_list = [\n    {\n        "api_type": "anthropic",\n        "model": "claude-3-5-sonnet-20240620",\n        "api_key": os.getenv("ANTHROPIC_API_KEY"),\n        "cache_seed": None,\n    },\n]\n\n# Mistral\'s Mixtral 8x7B for player black (through Together.AI)\nplayer_black_config_list = [\n    {\n        "api_type": "together",\n        "model": "mistralai/Mixtral-8x7B-Instruct-v0.1",\n        "api_key": os.environ.get("TOGETHER_API_KEY"),\n        "cache_seed": None,\n    },\n]\n'})}),"\n",(0,o.jsx)(n.p,{children:"We\u2019ll setup game variables and the two functions for getting the\navailable moves and then making a move."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# Initialize the board.\nboard = chess.Board()\n\n# Keep track of whether a move has been made.\nmade_move = False\n\n\ndef get_legal_moves() -> Annotated[\n    str,\n    "Call this tool to list of all legal chess moves on the board, output is a list in UCI format, e.g. e2e4,e7e5,e7e8q.",\n]:\n    return "Possible moves are: " + ",".join([str(move) for move in board.legal_moves])\n\n\ndef make_move(\n    move: Annotated[\n        str,\n        "Call this tool to make a move after you have the list of legal moves and want to make a move. Takes UCI format, e.g. e2e4 or e7e5 or e7e8q.",\n    ]\n) -> Annotated[str, "Result of the move."]:\n    move = chess.Move.from_uci(move)\n    board.push_uci(str(move))\n    global made_move\n    made_move = True\n    # Display the board.\n    display(\n        chess.svg.board(board, arrows=[(move.from_square, move.to_square)], fill={move.from_square: "gray"}, size=200)\n    )\n    # Get the piece name.\n    piece = board.piece_at(move.to_square)\n    piece_symbol = piece.unicode_symbol()\n    piece_name = (\n        chess.piece_name(piece.piece_type).capitalize()\n        if piece_symbol.isupper()\n        else chess.piece_name(piece.piece_type)\n    )\n    return f"Moved {piece_name} ({piece_symbol}) from {chess.SQUARE_NAMES[move.from_square]} to {chess.SQUARE_NAMES[move.to_square]}."\n'})}),"\n",(0,o.jsx)(n.h2,{id:"creating-agents",children:"Creating agents"}),"\n",(0,o.jsx)(n.p,{children:"Our main player agents are created next, with a few tweaks to help our\nmodels play:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Explicitly ",(0,o.jsx)(n.strong,{children:"telling agents their names"})," (as the name field isn\u2019t\nsent to the LLM)."]}),"\n",(0,o.jsxs)(n.li,{children:["Providing simple instructions on the ",(0,o.jsx)(n.strong,{children:"order of functions"})," (not all\nmodels will need it)."]}),"\n",(0,o.jsxs)(n.li,{children:["Asking the LLM to ",(0,o.jsx)(n.strong,{children:"include their name in the response"})," so the\nmessage content will include their names, helping the LLM understand\nwho has made which moves."]}),"\n",(0,o.jsxs)(n.li,{children:["Ensure ",(0,o.jsx)(n.strong,{children:"no spaces are in the agent names"})," so that their name is\ndistinguishable in the conversation."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'player_white = ConversableAgent(\n    name="Player_White",\n    system_message="You are a chess player and you play as white, your name is \'Player_White\'. "\n    "First call the function get_legal_moves() to get list of legal moves. "\n    "Then call the function make_move(move) to make a move. "\n    "Then tell Player_Black you have made your move and it is their turn. "\n    "Make sure you tell Player_Black you are Player_White.",\n    llm_config={"config_list": player_white_config_list, "cache_seed": None},\n)\n\nplayer_black = ConversableAgent(\n    name="Player_Black",\n    system_message="You are a chess player and you play as black, your name is \'Player_Black\'. "\n    "First call the function get_legal_moves() to get list of legal moves. "\n    "Then call the function make_move(move) to make a move. "\n    "Then tell Player_White you have made your move and it is their turn. "\n    "Make sure you tell Player_White you are Player_Black.",\n    llm_config={"config_list": player_black_config_list, "cache_seed": None},\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Now we create a proxy agent that will be used to move the pieces on the\nboard."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# Check if the player has made a move, and reset the flag if move is made.\ndef check_made_move(msg):\n    global made_move\n    if made_move:\n        made_move = False\n        return True\n    else:\n        return False\n\n\nboard_proxy = ConversableAgent(\n    name="Board_Proxy",\n    llm_config=False,\n    # The board proxy will only terminate the conversation if the player has made a move.\n    is_termination_msg=check_made_move,\n    # The auto reply message is set to keep the player agent retrying until a move is made.\n    default_auto_reply="Please make a move.",\n    human_input_mode="NEVER",\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Our functions are then assigned to the agents so they can be passed to\nthe LLM to choose from."}),"\n",(0,o.jsxs)(n.p,{children:["We have tweaked the descriptions to provide ",(0,o.jsx)(n.strong,{children:"more guidance on when"})," to\nuse it."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'register_function(\n    make_move,\n    caller=player_white,\n    executor=board_proxy,\n    name="make_move",\n    description="Call this tool to make a move after you have the list of legal moves.",\n)\n\nregister_function(\n    get_legal_moves,\n    caller=player_white,\n    executor=board_proxy,\n    name="get_legal_moves",\n    description="Call this to get a legal moves before making a move.",\n)\n\nregister_function(\n    make_move,\n    caller=player_black,\n    executor=board_proxy,\n    name="make_move",\n    description="Call this tool to make a move after you have the list of legal moves.",\n)\n\nregister_function(\n    get_legal_moves,\n    caller=player_black,\n    executor=board_proxy,\n    name="get_legal_moves",\n    description="Call this to get a legal moves before making a move.",\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Almost there, we now create nested chats between players and the board\nproxy agent to work out the available moves and make the move."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'player_white.register_nested_chats(\n    trigger=player_black,\n    chat_queue=[\n        {\n            # The initial message is the one received by the player agent from\n            # the other player agent.\n            "sender": board_proxy,\n            "recipient": player_white,\n            # The final message is sent to the player agent.\n            "summary_method": "last_msg",\n        }\n    ],\n)\n\nplayer_black.register_nested_chats(\n    trigger=player_white,\n    chat_queue=[\n        {\n            # The initial message is the one received by the player agent from\n            # the other player agent.\n            "sender": board_proxy,\n            "recipient": player_black,\n            # The final message is sent to the player agent.\n            "summary_method": "last_msg",\n        }\n    ],\n)\n'})}),"\n",(0,o.jsx)(n.h2,{id:"playing-the-game",children:"Playing the game"}),"\n",(0,o.jsx)(n.p,{children:"Now the game can begin!"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# Clear the board.\nboard = chess.Board()\n\nchat_result = player_black.initiate_chat(\n    player_white,\n    message="Let\'s play chess! Your move.",\n    max_turns=10,\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Player_Black (to Player_White):\n\nLet's play chess! Your move.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n********************************************************************************\nStarting a new chat....\n\n********************************************************************************\nBoard_Proxy (to Player_White):\n\nLet's play chess! Your move.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer_White (to Board_Proxy):\n\nCertainly! I'd be happy to play chess with you. As White, I'll make the first move. Let me start by checking the legal moves available to me.\n***** Suggested tool call (toolu_015sLMucefMVqS5ZNyWVGjgu): get_legal_moves *****\nArguments: \n{}\n*********************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION get_legal_moves...\nBoard_Proxy (to Player_White):\n\nBoard_Proxy (to Player_White):\n\n***** Response from calling tool (toolu_015sLMucefMVqS5ZNyWVGjgu) *****\nPossible moves are: g1h3,g1f3,b1c3,b1a3,h2h3,g2g3,f2f3,e2e3,d2d3,c2c3,b2b3,a2a3,h2h4,g2g4,f2f4,e2e4,d2d4,c2c4,b2b4,a2a4\n***********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer_White (to Board_Proxy):\n\nThank you for initiating a game of chess! As Player_White, I'll make the first move. After analyzing the legal moves, I've decided to make a classic opening move.\n***** Suggested tool call (toolu_01VjmBhHcGw5RTRKYC4Y5MeV): make_move *****\nArguments: \n{\"move\": \"e2e4\"}\n***************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION make_move...\nBoard_Proxy (to Player_White):\n\nBoard_Proxy (to Player_White):\n\n***** Response from calling tool (toolu_01VjmBhHcGw5RTRKYC4Y5MeV) *****\nMoved pawn (\u2659) from e2 to e4.\n***********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer_White (to Board_Proxy):\n\nHello, Player_Black! I'm Player_White, and I've just made my move. I've chosen to play the classic opening move e2e4, moving my king's pawn forward two squares. This opens up lines for both my queen and king's bishop, and stakes a claim to the center of the board. It's now your turn to make a move. Good luck!\n\n--------------------------------------------------------------------------------\nPlayer_White (to Player_Black):\n\nHello, Player_Black! I'm Player_White, and I've just made my move. I've chosen to play the classic opening move e2e4, moving my king's pawn forward two squares. This opens up lines for both my queen and king's bishop, and stakes a claim to the center of the board. It's now your turn to make a move. Good luck!\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n********************************************************************************\nStarting a new chat....\n\n********************************************************************************\nBoard_Proxy (to Player_Black):\n\nHello, Player_Black! I'm Player_White, and I've just made my move. I've chosen to play the classic opening move e2e4, moving my king's pawn forward two squares. This opens up lines for both my queen and king's bishop, and stakes a claim to the center of the board. It's now your turn to make a move. Good luck!\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer_Black (to Board_Proxy):\n\n***** Suggested tool call (call_z6jagiqn59m784w1n0zhmiop): get_legal_moves *****\nArguments: \n{}\n********************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION get_legal_moves...\nBoard_Proxy (to Player_Black):\n\nBoard_Proxy (to Player_Black):\n\n***** Response from calling tool (call_z6jagiqn59m784w1n0zhmiop) *****\nPossible moves are: g8h6,g8f6,b8c6,b8a6,h7h6,g7g6,f7f6,e7e6,d7d6,c7c6,b7b6,a7a6,h7h5,g7g5,f7f5,e7e5,d7d5,c7c5,b7b5,a7a5\n**********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer_Black (to Board_Proxy):\n\n***** Suggested tool call (call_59t20pl0ab68z4xx2workgbc): make_move *****\nArguments: \n{\"move\":\"g8h6\"}\n**************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION make_move...\nBoard_Proxy (to Player_Black):\n\nBoard_Proxy (to Player_Black):\n\n***** Response from calling tool (call_59t20pl0ab68z4xx2workgbc) *****\nMoved knight (\u265e) from g8 to h6.\n**********************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\nPlayer_Black (to Board_Proxy):\n\n***** Suggested tool call (call_jwv1d86srs1fnvu33cky9tgv): make_move *****\nArguments: \n{\"move\":\"g8h6\"}\n**************************************************************************\n\n--------------------------------------------------------------------------------\nPlayer_Black (to Player_White):\n\n\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> USING AUTO REPLY...\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(86341).Z+"",width:"200",height:"200"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(44775).Z+"",width:"200",height:"200"})}),"\n",(0,o.jsx)(n.p,{children:"At this stage, it\u2019s hard to tell who\u2019s going to win, but they\u2019re playing\nwell and using the functions correctly."})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},86341:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cell-9-output-2-d2343a83089b541792b2b90253103fa1.svg"},44775:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/cell-9-output-3-dd164f9cfd82b1b04bf235c81b54a161.svg"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var o=t(67294);const a={},s=o.createContext(a);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);