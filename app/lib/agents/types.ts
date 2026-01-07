export interface Agent {
  name: string;
  role: string;
  systemPrompt: string;
  execute(context: AgentContext): Promise<AgentResult>;
}

export interface AgentContext {
  userRequest: string;
  previousResults?: Record<string, any>;
  codebase?: Codebase;
  dependencies?: string[];
}

export interface AgentResult {
  output: any;
  metadata: {
    duration: number;
    tokensUsed: number;
    cached: boolean;
  };
}

export interface Codebase {
  frontend?: string;
  backend?: string;
  tests?: string;
  config?: any;
}

export interface AppGenerationResult {
  code: any;
  architecture: any;
  metadata: {
    generationTime: number;
    cached: Record<string, boolean>;
  };
  backgroundTasks: {
    status: string;
    tasks: Promise<any[]>;
  };
}

export interface Task {
  agent: string;
  context: AgentContext;
}
