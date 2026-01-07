import { BaseProvider, getOpenAILikeModel } from '~/lib/modules/llm/base-provider';
import type { ModelInfo } from '~/lib/modules/llm/types';
import type { IProviderSetting } from '~/types/model';
import type { LanguageModelV1 } from 'ai';

export default class NvidiaProvider extends BaseProvider {
  name = 'Nvidia';
  getApiKeyLink = 'https://build.nvidia.com/';

  config = {
    baseUrl: 'https://integrate.api.nvidia.com/v1',
    baseUrlKey: 'NVIDIA_API_BASE_URL',
    apiTokenKey: 'NVIDIA_API_KEY',
  };

  // Liste complète des modèles open-source disponibles sur build.nvidia.com/models
  staticModels: ModelInfo[] = [
    // NVIDIA Models
    {
      name: 'nvidia/cosmos-reason2-8b',
      label: 'NVIDIA Cosmos Reason2 8B',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '🧠 NVIDIA',
    },
    {
      name: 'nvidia/nemotron-3-nano-30b-a3b',
      label: 'NVIDIA NeMoTron 3 Nano 30B (a3b)',
      provider: this.name,
      maxTokenAllowed: 65536,
      category: '🧠 NVIDIA',
    },
    {
      name: 'nvidia/llama-3.3-nemotron-super-49b-v1.5',
      label: 'NVIDIA Llama 3.3 NeMoTron Super 49B v1.5',
      provider: this.name,
      maxTokenAllowed: 131072,
      category: '🧠 NVIDIA',
    },
    {
      name: 'nvidia/llama-3.3-nemotron-super-49b-v1',
      label: 'NVIDIA Llama 3.3 NeMoTron Super 49B v1',
      provider: this.name,
      maxTokenAllowed: 131072,
      category: '🧠 NVIDIA',
    },
    {
      name: 'nvidia/llama-3.1-nemotron-ultra-253b-v1',
      label: 'NVIDIA Llama 3.1 NeMoTron Ultra 253B v1',
      provider: this.name,
      maxTokenAllowed: 131072,
      category: '🧠 NVIDIA',
    },
    {
      name: 'nvidia/llama-3.1-nemotron-nano-8b-v1',
      label: 'NVIDIA Llama 3.1 NeMoTron Nano 8B v1',
      provider: this.name,
      maxTokenAllowed: 131072,
      category: '🧠 NVIDIA',
    },
    {
      name: 'nvidia/llama-3.1-nemotron-nano-4b-v1.1',
      label: 'NVIDIA Llama 3.1 NeMoTron Nano 4B v1.1',
      provider: this.name,
      maxTokenAllowed: 131072,
      category: '🧠 NVIDIA',
    },
    {
      name: 'nvidia/nvidia-nemotron-nano-9b-v2',
      label: 'NVIDIA NeMoTron Nano 9B v2',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '🧠 NVIDIA',
    },

    // Mistral Models
    {
      name: 'mistralai/devstral-2-123b-instruct-2512',
      label: 'Mistral Devstral 2 123B Instruct',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '✨ Mistral',
    },
    {
      name: 'mistralai/mistral-large-3-675b-instruct-2512',
      label: 'Mistral Large 3 675B Instruct',
      provider: this.name,
      maxTokenAllowed: 131072,
      category: '✨ Mistral',
    },
    {
      name: 'mistralai/mistral-small-3.1-24b-instruct-2503',
      label: 'Mistral Small 3.1 24B Instruct',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '✨ Mistral',
    },
    {
      name: 'mistralai/mistral-medium-3-instruct',
      label: 'Mistral Medium 3 Instruct',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '✨ Mistral',
    },
    {
      name: 'mistralai/mistral-small-24b-instruct',
      label: 'Mistral Small 24B Instruct',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '✨ Mistral',
    },
    {
      name: 'mistralai/magistral-small-2506',
      label: 'Mistral Magistral Small',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '✨ Mistral',
    },
    {
      name: 'mistralai/mistral-nemotron',
      label: 'Mistral NeMoTron',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '✨ Mistral',
    },

    // DeepSeek Models
    {
      name: 'deepseek-ai/deepseek-v3.2',
      label: 'DeepSeek v3.2',
      provider: this.name,
      maxTokenAllowed: 65536,
      category: '🔍 DeepSeek',
    },
    {
      name: 'deepseek-ai/deepseek-v3.1',
      label: 'DeepSeek v3.1',
      provider: this.name,
      maxTokenAllowed: 65536,
      category: '🔍 DeepSeek',
    },
    {
      name: 'deepseek-ai/deepseek-v3.1-terminus',
      label: 'DeepSeek v3.1 Terminus',
      provider: this.name,
      maxTokenAllowed: 65536,
      category: '🔍 DeepSeek',
    },
    {
      name: 'deepseek-ai/deepseek-r1',
      label: 'DeepSeek R1',
      provider: this.name,
      maxTokenAllowed: 65536,
      category: '🔍 DeepSeek',
    },
    {
      name: 'deepseek-ai/deepseek-r1-0528',
      label: 'DeepSeek R1 (0528)',
      provider: this.name,
      maxTokenAllowed: 65536,
      category: '🔍 DeepSeek',
    },
    {
      name: 'deepseek-ai/deepseek-r1-distill-qwen-32b',
      label: 'DeepSeek R1 Distill Qwen 32B',
      provider: this.name,
      maxTokenAllowed: 65536,
      category: '🔍 DeepSeek',
    },
    {
      name: 'deepseek-ai/deepseek-r1-distill-qwen-14b',
      label: 'DeepSeek R1 Distill Qwen 14B',
      provider: this.name,
      maxTokenAllowed: 65536,
      category: '🔍 DeepSeek',
    },
    {
      name: 'deepseek-ai/deepseek-r1-distill-qwen-7b',
      label: 'DeepSeek R1 Distill Qwen 7B',
      provider: this.name,
      maxTokenAllowed: 65536,
      category: '🔍 DeepSeek',
    },
    {
      name: 'deepseek-ai/deepseek-r1-distill-llama-8b',
      label: 'DeepSeek R1 Distill Llama 8B',
      provider: this.name,
      maxTokenAllowed: 65536,
      category: '🔍 DeepSeek',
    },

    // OpenAI OSS Models
    {
      name: 'openai/gpt-oss-20b',
      label: 'GPT OSS 20B',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '🤖 OpenAI OSS',
    },
    {
      name: 'openai/gpt-oss-120b',
      label: 'GPT OSS 120B',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '🤖 OpenAI OSS',
    },

    // Meta Llama Models
    {
      name: 'meta/llama-4-maverick-17b-128e-instruct',
      label: 'Llama 4 Maverick 17B 128e Instruct',
      provider: this.name,
      maxTokenAllowed: 131072,
      category: '🦙 Meta Llama',
    },
    {
      name: 'meta/llama-4-scout-17b-16e-instruct',
      label: 'Llama 4 Scout 17B 16e Instruct',
      provider: this.name,
      maxTokenAllowed: 131072,
      category: '🦙 Meta Llama',
    },
    {
      name: 'meta/llama-3.3-70b-instruct',
      label: 'Llama 3.3 70B Instruct',
      provider: this.name,
      maxTokenAllowed: 131072,
      category: '🦙 Meta Llama',
    },
    {
      name: 'meta/llama-3.2-90b-vision-instruct',
      label: 'Llama 3.2 90B Vision Instruct',
      provider: this.name,
      maxTokenAllowed: 131072,
      category: '🦙 Meta Llama',
    },
    {
      name: 'meta/llama-3.2-11b-vision-instruct',
      label: 'Llama 3.2 11B Vision Instruct',
      provider: this.name,
      maxTokenAllowed: 131072,
      category: '🦙 Meta Llama',
    },
    {
      name: 'meta/llama-3.2-3b-instruct',
      label: 'Llama 3.2 3B Instruct',
      provider: this.name,
      maxTokenAllowed: 131072,
      category: '🦙 Meta Llama',
    },
    {
      name: 'meta/llama-3.2-1b-instruct',
      label: 'Llama 3.2 1B Instruct',
      provider: this.name,
      maxTokenAllowed: 131072,
      category: '🦙 Meta Llama',
    },

    // Qwen Models
    {
      name: 'qwen/qwen3-next-80b-a3b-instruct',
      label: 'Qwen3 Next 80B a3b Instruct',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '💬 Qwen',
    },
    {
      name: 'qwen/qwen3-next-80b-a3b-thinking',
      label: 'Qwen3 Next 80B a3b Thinking',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '💬 Qwen',
    },
    {
      name: 'qwen/qwen3-235b-a22b',
      label: 'Qwen3 235B a22b',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '💬 Qwen',
    },
    {
      name: 'qwen/qwen3-coder-480b-a35b-instruct',
      label: 'Qwen3 Coder 480B a35b Instruct',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '💬 Qwen',
    },
    {
      name: 'qwen/qwen2.5-7b-instruct',
      label: 'Qwen 2.5 7B Instruct',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '💬 Qwen',
    },
    {
      name: 'qwen/qwen2.5-coder-32b-instruct',
      label: 'Qwen 2.5 Coder 32B Instruct',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '💬 Qwen',
    },
    {
      name: 'qwen/qwen2.5-coder-7b-instruct',
      label: 'Qwen 2.5 Coder 7B Instruct',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '💬 Qwen',
    },
    {
      name: 'qwen/qwq-32b',
      label: 'QwQ 32B',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '💬 Qwen',
    },

    // Microsoft Phi Models
    {
      name: 'microsoft/phi-4-mini-instruct',
      label: 'Phi 4 Mini Instruct',
      provider: this.name,
      maxTokenAllowed: 16384,
      category: '🔷 Microsoft Phi',
    },
    {
      name: 'microsoft/phi-4-mini-flash-reasoning',
      label: 'Phi 4 Mini Flash Reasoning',
      provider: this.name,
      maxTokenAllowed: 16384,
      category: '🔷 Microsoft Phi',
    },
    {
      name: 'microsoft/phi-4-multimodal-instruct',
      label: 'Phi 4 Multimodal Instruct',
      provider: this.name,
      maxTokenAllowed: 16384,
      category: '🔷 Microsoft Phi',
    },
    {
      name: 'microsoft/phi-3.5-vision-instruct',
      label: 'Phi 3.5 Vision Instruct',
      provider: this.name,
      maxTokenAllowed: 131072,
      category: '🔷 Microsoft Phi',
    },
    {
      name: 'microsoft/phi-3.5-mini-instruct',
      label: 'Phi 3.5 Mini Instruct',
      provider: this.name,
      maxTokenAllowed: 131072,
      category: '🔷 Microsoft Phi',
    },

    // Moonshot (Kimi) Models
    {
      name: 'moonshotai/kimi-k2-thinking',
      label: 'Kimi K2 Thinking',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '🌙 Kimi',
    },
    {
      name: 'moonshotai/kimi-k2-instruct',
      label: 'Kimi K2 Instruct',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '🌙 Kimi',
    },
    {
      name: 'moonshotai/kimi-k2-instruct-0905',
      label: 'Kimi K2 Instruct (0905)',
      provider: this.name,
      maxTokenAllowed: 32768,
      category: '🌙 Kimi',
    },

    // Google Gemma Models
    {
      name: 'google/gemma-3-27b-it',
      label: 'Gemma 3 27B IT',
      provider: this.name,
      maxTokenAllowed: 8192,
      category: '🔮 Google Gemma',
    },
    {
      name: 'google/gemma-3-1b-it',
      label: 'Gemma 3 1B IT',
      provider: this.name,
      maxTokenAllowed: 8192,
      category: '🔮 Google Gemma',
    },
    {
      name: 'google/gemma-3n-e4b-it',
      label: 'Gemma 3N e4b IT',
      provider: this.name,
      maxTokenAllowed: 8192,
      category: '🔮 Google Gemma',
    },
    {
      name: 'google/gemma-3n-e2b-it',
      label: 'Gemma 3N e2b IT',
      provider: this.name,
      maxTokenAllowed: 8192,
      category: '🔮 Google Gemma',
    },

    // Image Generation Models
    {
      name: 'black-forest-labs/FLUX.1-dev',
      label: 'FLUX.1 Dev (Image Generation)',
      provider: this.name,
      maxTokenAllowed: 4096,
      category: '🎨 Image Generation',
    },
    {
      name: 'black-forest-labs/FLUX.1-schnell',
      label: 'FLUX.1 Schnell (Image Generation)',
      provider: this.name,
      maxTokenAllowed: 4096,
      category: '🎨 Image Generation',
    },
    {
      name: 'black-forest-labs/FLUX.1-Kontext-dev',
      label: 'FLUX.1 Kontext Dev (Image Generation)',
      provider: this.name,
      maxTokenAllowed: 4096,
      category: '🎨 Image Generation',
    },
    {
      name: 'stabilityai/stable-diffusion-3.5-large',
      label: 'Stable Diffusion 3.5 Large (Image Generation)',
      provider: this.name,
      maxTokenAllowed: 4096,
      category: '🎨 Image Generation',
    },
  ];

  getModelInstance(options: {
    model: string;
    serverEnv?: Env;
    apiKeys?: Record<string, string>;
    providerSettings?: Record<string, IProviderSetting>;
  }): LanguageModelV1 {
    const { model, serverEnv, apiKeys, providerSettings } = options;

    const { baseUrl, apiKey } = this.getProviderBaseUrlAndKey({
      apiKeys,
      providerSettings: providerSettings?.[this.name],
      serverEnv: serverEnv as any,
      defaultBaseUrlKey: 'NVIDIA_API_BASE_URL',
      defaultApiTokenKey: 'NVIDIA_API_KEY',
    });

    if (!baseUrl || !apiKey) {
      throw new Error(`Missing API key for ${this.name} provider`);
    }

    return getOpenAILikeModel(baseUrl, apiKey, model);
  }
}
