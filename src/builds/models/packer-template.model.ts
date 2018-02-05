// Amazon Builders
export interface AmazonEbsBuilder {
  id?: number;
  friendly_name?: string;
  type: string;
  access_key: string;
  secret_key: string;
  region: string;
  instance_type: string;
  ssh_username: string;
  ami_name: string;
  source_ami_filter: {
    filters: { virtualization: string, name: string, 'root-device-type': string},
    owners: string[],
    most_recent: boolean
  };
}

// Azure Builders
export interface AzureArmBuilder {
  id?: number;
  friendly_name?: string;
  type: string;
}

// Builder Types
export type BuilderTypes =
| AmazonEbsBuilder
| AzureArmBuilder;


export interface PackerTemplate {
  id?: number;
  friendly_name?: string;
  builders: BuilderTypes[];
}
