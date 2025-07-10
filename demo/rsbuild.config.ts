import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
	plugins: [
		pluginReact(),
		pluginModuleFederation(
			{
				name: 'demo',
				remotes: {
					reactuploadform:
						'awesomecursor@http://localhost:3001/mf/mf-manifest.json',
				},
				shared: {
					react: {
						eager: true,
						singleton: true,
					},
					'react-dom': {
						eager: true,
						singleton: true,
					},
				},
			},
			{
				ssr: false,
				environment: 'development',
			},
		),
	],
});
