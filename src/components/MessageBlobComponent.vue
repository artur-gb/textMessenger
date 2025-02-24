<template>
    <div class="message-container">
      <div class="message-header">
        <span class="sender">{{ sender }}</span>
        <span class="date">{{ date }}</span>
      </div>
      <div class="message-body">{{ text }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from "vue";
  
  type MessageProps = {
    sender: string;
    text: string;
    date: string;
  };
  
  defineProps<MessageProps>();
  </script>
  
  <style scoped>
  .message-container {
    max-width: 70%;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 10px;
    margin: 5px 0;
    display: flex;
    flex-direction: column;
  }
  .message-header {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #666;
    margin-bottom: 5px;
  }
  .sender {
    font-weight: bold;
  }
  .message-body {
    font-size: 14px;
    color: #333;
  }
  </style>
  