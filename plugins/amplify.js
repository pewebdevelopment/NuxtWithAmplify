import Vue from "Vue";
import Amplify, * as AmplifyModules from 'aws-amplify';
// import { AmplifyPlugin } from 'aws-amplify-vue';


// import Amplify from 'aws-amplify'
import awsconfig from '~/aws-exports'

Amplify.configure(awsconfig)