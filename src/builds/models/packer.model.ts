export interface Builder {
  access_key: string;
  secret_key: string;
  type: string;
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

export interface Packer {
  builders: Builder[];
}
