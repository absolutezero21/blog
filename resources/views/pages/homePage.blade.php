@extends('layouts.app')
@section('title', 'Sample App')
@section('styles')
	<style>
		html {
			overflow-y: hidden;
			font-family: 'Arial';
		}
	</style>
@endsection
@section('content')
	<div id="app">
		<home-app></home-app>
	</div>
@endsection