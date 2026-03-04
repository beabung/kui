#!/bin/bash

echo "🚀 Quartz 동기화 프로세스를 시작합니다..."

# 1. Quartz의 content 폴더 비우기
echo "🧹 1. 기존 content 폴더를 비우는 중..."
rm -rf ./content/*

# 2. 옵시디언 보관함에서 최신 파일 가져오기
echo "📂 2. 옵시디언 파일을 복사하는 중..."
# 윈도우 경로를 Bash 스타일로 변경 (C:\ -> /c/)
SOURCE_PATH="/c/Users/Administrator/MyFolder/obsidian/kui/"

# 폴더가 존재하는지 확인 후 복사
if [ -d "$SOURCE_PATH" ]; then
    cp -r "$SOURCE_PATH"* ./content/
    
    # 복사된 파일 개수 확인
    COUNT=$(find ./content -name "*.md" | wc -l)
    echo "✅ 총 $COUNT 개의 마크다운 파일이 복사되었습니다."
else
    echo "❌ 오류: 원본 경로를 찾을 수 없습니다: $SOURCE_PATH"
    exit 1
fi

# 3. 쿼츠 동기화 실행
echo "🌐 3. Quartz Sync 실행 중 (GitHub로 업로드)..."
npx quartz sync

echo "✨ 모든 작업이 완료되었습니다!"