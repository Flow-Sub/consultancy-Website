import React, { useState } from 'react';

import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ConsultantMessageCard = ({ consultant, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (newMessage?.trim()) {
      setIsTyping(true);
      onSendMessage(newMessage);
      setNewMessage('');
      setTimeout(() => setIsTyping(false), 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e?.key === 'Enter' && !e?.shiftKey) {
      e?.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 brand-shadow">
      {/* Consultant Header */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src={consultant?.avatar}
              alt={consultant?.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900">{consultant?.name}</h3>
            <p className="text-sm text-gray-600">{consultant?.role}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" iconName="Phone" iconSize={16} />
            <Button variant="ghost" size="sm" iconName="Video" iconSize={16} />
          </div>
        </div>
      </div>
      {/* Messages */}
      <div className="p-4 max-h-80 overflow-y-auto space-y-4">
        {messages?.map((message, index) => (
          <div
            key={index}
            className={`flex ${message?.sender === 'You' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message?.sender === 'You' ?'bg-primary text-white' :'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="text-sm">{message?.content}</p>
              <p className={`text-xs mt-1 ${
                message?.sender === 'You' ? 'text-primary-foreground/70' : 'text-gray-500'
              }`}>
                {message?.timestamp}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 px-4 py-2 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Message Input */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-end space-x-2">
          <div className="flex-1">
            <Input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e?.target?.value)}
              onKeyPress={handleKeyPress}
              className="resize-none"
            />
          </div>
          <Button
            variant="default"
            size="sm"
            iconName="Send"
            iconSize={16}
            onClick={handleSendMessage}
            disabled={!newMessage?.trim()}
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultantMessageCard;